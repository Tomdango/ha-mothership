const nmap = require('libnmap');
const axios = require('axios');
const mongoose = require('mongoose');
const { lookup } = require('dns');
const { hostname } = require('os');
const logger = require('../logging')('discovery');
const { NMAP_RANGE } = require('../constants/discovery');

const Node = mongoose.model('Node');
let serverIp = '';

class DiscoveryProtocol {
  constructor(opt = {}) {
    const { timeout, port, range, scanInterval } = opt;
    this.config = {
      scanInterval: scanInterval || 60000,
      timeout: timeout || 10,
      discoveryPort: port || '15000',
      ports: port || '15000',
      range: range || NMAP_RANGE
    };
    DiscoveryProtocol.fetchIp();
    setInterval(DiscoveryProtocol.fetchIp, 60000);
  }

  static fetchIp() {
    lookup(hostname(), (err, add) => {
      if (serverIp !== add) {
        logger.verbose(`Server IP identified - ${add}`);
        serverIp = add;
      }
    });
  }

  networkScan() {
    const { timeout, ports, range } = this.config;
    return new Promise((resolve, reject) => {
      logger.debug('Running Nmap');
      nmap.scan({ timeout, ports, range }, (err, report) => {
        if (err) {
          logger.error('Nmap Failed', { error: err });
          return reject(err);
        }
        logger.debug('Nmap scan completed');
        return resolve(report);
      });
    });
  }

  static processReport(rawReport) {
    return Object.values(rawReport).reduce((ipAddr, report) => {
      const { host } = report;
      if (!host) return ipAddr;
      host.forEach(item => {
        const { address } = item;
        address.forEach(ip => {
          ipAddr.push(ip.item.addr);
        });
      });
      return ipAddr;
    }, []);
  }

  async attemptHandshake(ipAddresses) {
    const { discoveryPort } = this.config;
    logger.debug('Attempting handshake');
    const responses = await Promise.all(
      ipAddresses.map(async ip => {
        try {
          const response = await axios.post(
            `http://${ip}:${discoveryPort}/discover`,
            `serverIp=${serverIp}`
          );
          if (response.status === 200) {
            logger.debug(`Received response from ${ip}`);
            const { data } = response;
            return { ...data, ip };
          }
          return null;
        } catch (e) {
          return null;
        }
      })
    );
    return responses.filter(x => x !== null);
  }

  static async processHandshakes(handshakes) {
    const nodesToConfigure = await Promise.all(
      handshakes.map(async handshake => {
        const { nodeId, ip } = handshake;
        const existingNode = await Node.findOne({ nodeId });
        if (existingNode === null) {
          return { ...handshake, ip };
        }
        if (existingNode.lastIp !== ip) {
          logger.info(`Updated IP address for ${nodeId} (${ip})`);
          existingNode.updateIp(ip);
          await existingNode.save();
        }
        return null;
      })
    );
    nodesToConfigure
      .filter(x => x !== null)
      .forEach(node => {
        // eslint-disable-next-line no-console
        logger.info(`Node Discovered | id=${node.nodeId}\ttype=${node.type}`);
        const newNode = new Node({ nodeId: node.nodeId, type: node.type, lastIp: node.ip });
        newNode.validate().then(() => {
          newNode.save();
        });
      });
  }

  static sleep(ms = 1000) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async discover() {
    while (serverIp === '') {
      logger.debug('Server IP not identified');
      // eslint-disable-next-line no-await-in-loop
      await DiscoveryProtocol.sleep();
    }
    try {
      const rawReport = await this.networkScan();
      const ipAddresses = DiscoveryProtocol.processReport(rawReport);
      const handshakes = await this.attemptHandshake(ipAddresses);
      DiscoveryProtocol.processHandshakes(handshakes);
      logger.debug('Discovery completed');
    } catch (err) {
      logger.error('Network Scan Failed', { err });
    }
  }

  start() {
    const { scanInterval } = this.config;
    this.discover();
    if (!this.interval) {
      this.interval = setInterval(() => this.discover(), scanInterval);
    }
  }
}

module.exports = DiscoveryProtocol;
