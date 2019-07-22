#!/usr/bin/env node
const http = require('http');
const ws = require('express-ws');
const expressApp = require('./app');
const logger = require('./core/logging')('http');
require('dotenv').config();

class Server {
  constructor(app, opt = {}) {
    const { port } = opt;
    this.port = Server.normalizePort(port || 3000);
    app.set('port', port);
    this.server = http.createServer(app);
    ws(app, this.server);

    this.onError = this.onError.bind(this);
    this.onListening = this.onListening.bind(this);
  }

  start() {
    this.server.on('error', this.onError);
    this.server.on('listening', this.onListening);
    this.server.listen(this.port);
  }

  static normalizePort(val) {
    const port = parseInt(val, 10);
    if (Number.isNaN(port)) {
      return val;
    }
    if (port >= 0) {
      return port;
    }
    return false;
  }

  onError(err) {
    if (err.syscall !== 'listen') {
      throw err;
    }
    const bind = typeof this.port === 'string' ? `Pipe ${this.port}` : `Port ${this.port}`;
    switch (err.code) {
      case 'EACCES':
        logger.crit(`${bind} requires elevated privileges`);
        process.exit(1);
        break;
      case 'EADDRINUSE':
        logger.crit(`${bind} is already in use`);
        process.exit(1);
        break;
      default:
        throw err;
    }
  }

  onListening() {
    const addr = this.server.address();
    const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;
    logger.info(`Listening on ${bind}`);
  }
}

const server = new Server(expressApp);
server.start();
