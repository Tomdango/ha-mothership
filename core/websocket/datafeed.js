const Hertzy = require('hertzy');
const uuidv4 = require('uuid/v4');
const logger = require('../logging')('datafeed:area');

class Area {
  constructor() {
    this.frequency = Hertzy.tune('Datafeed::Area');
    this.webSocketConnections = [];
    this.handleUpdate = this.handleUpdate.bind(this);
    this.frequency.on('Update', this.handleUpdate);
  }

  handleUpdate({ type, areaId, data }) {
    const { webSocketConnections } = this;
    logger.silly(`Dispatching Update to Clients | type=${type}`);
    const feed = JSON.stringify({
      protocol: 'datafeed',
      type: `Area.${type}`,
      feed: {
        [areaId]: data
      }
    });
    Promise.all(
      webSocketConnections.map(async conn => {
        const { ws } = conn;
        ws.send(feed);
      })
    ).then(() => {
      logger.silly(`Dispatch complete | type=${type}`);
    });
  }

  register(ws) {
    const wsId = uuidv4();
    this.webSocketConnections.push({
      id: wsId,
      ws
    });
    ws.on('close', () => {
      this.unregister(wsId);
    });
  }

  unregister(wsId) {
    const { webSocketConnections } = this;
    this.webSocketConnections = webSocketConnections.filter(ws => ws.id !== wsId);
  }
}

const AreaHandler = new Area();

module.exports = app => {
  app.use('/datafeed/areas', (req, res, next) => next());
  app.ws('/datafeed/areas', ws => AreaHandler.register(ws));
};
