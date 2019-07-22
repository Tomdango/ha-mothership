require('./database');
require('./discovery');
require('./routine');
const expressWs = require('express-ws');
const websocket = require('./websocket');

module.exports = app => {
  expressWs(app);
  websocket(app);
};
