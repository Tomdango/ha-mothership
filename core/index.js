require('./database');
require('./discovery');
const expressWs = require('express-ws');
const websocket = require('./websocket');

module.exports = app => {
  expressWs(app);
  websocket(app);
};
