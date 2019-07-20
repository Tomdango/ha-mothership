const mongoose = require('mongoose');
const logger = require('../logging')('websocket:monitor');

const Area = mongoose.model('Area');

let areas = [];

setInterval(async () => {
  areas = await Area.find({});
}, 2000);

const processMessage = ({ nodeId, temp, humidity }) => {
  const areasToUpdate = areas.reduce((allAreas, area) => {
    const hasNodes =
      area.registeredNodes.filter(registeredNodeId => registeredNodeId === nodeId).length > 0;
    if (hasNodes) allAreas.push(area);
    return allAreas;
  }, []);
  Promise.all(
    areasToUpdate.map(async area => {
      if (temp) await area.updateTemperature(temp);
      if (humidity) await area.updateHumidity(humidity);
      await area.save();
    })
  );
};

module.exports = app => {
  app.use('/monitor', (req, res, next) => next());
  app.ws('/monitor', ws => {
    // eslint-disable-next-line no-underscore-dangle
    logger.info(`Node connected - ${ws._socket.remoteAddress}`);
    ws.on('message', msg => {
      const parsedMsg = JSON.parse(msg);
      logger.debug(`Message received from ${parsedMsg.nodeId}`);
      processMessage(parsedMsg);
    });
    ws.on('close', () => {
      // eslint-disable-next-line no-underscore-dangle
      logger.debug(`Monitor Node disconnected - ${ws._socket.remoteAddress}`);
    });
  });
};
