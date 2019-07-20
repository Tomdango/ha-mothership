const monitor = require('./monitor');
const datafeed = require('./datafeed');

module.exports = app => {
  monitor(app);
  datafeed(app);
};
