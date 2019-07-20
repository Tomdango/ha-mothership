const nodes = require('./nodes');
const areas = require('./areas');

const addRoutes = app => {
  nodes(app);
  areas(app);
};

module.exports = addRoutes;
