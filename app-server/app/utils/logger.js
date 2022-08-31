const winston = require('winston');

const logger = winston.createLogger({
    format: winston.format.combine(
        winston.format.errors({stack: true}),
        winston.format.json(),
        winston.format.colorize()
    ),
    transports: [
        new winston.transports.Console({level: 'info'})
    ]
});

module.exports = logger;
