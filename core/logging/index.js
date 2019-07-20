const { createLogger, format, transports } = require('winston');

module.exports = name => {
  const logger = createLogger({
    level: 'silly',
    format: format.combine(
      format.colorize(),
      format.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss'
      }),
      format.printf(info => `${info.timestamp} [${info.level}] [${name}]: ${info.message}`)
    ),
    transports: [new transports.Console()]
  });
  logger.stream = {
    write(message) {
      logger.info(message);
    }
  };
  return logger;
};
