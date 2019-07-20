const express = require('express');
const morgan = require('morgan');
const core = require('./core');
const logger = require('./core/logging')('express');
const registerControllers = require('./controllers');

const setupApp = app => {
  core(app);
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE');
    next();
  });
  app.use(morgan('dev', { stream: logger.stream }));
  app.use(express.json());
  registerControllers(app);
  app.use((req, res) => {
    res.sendStatus(404);
    // TODO: Add error handler
  });
  // Ready for React App
  // app.use('/ui', express.static(path.join(__dirname, 'public')));
  return app;
};

module.exports = setupApp(express());
