import winston = require("winston");
import moment = require("moment");
// import fs = require('fs');

// const logDir = 'logs';
// const env = process.env.NODE_ENV || 'development';

function getTimeStamp() {
    const date = moment(new Date()).format("YYYY-MM-DD HH:MM:SS");
    //    const tsFormat = () => (new Date()).toLocaleTimeString();
    return date;
}

// console.log(getTimeStamp());

export const logger = new winston.Logger({
    level: "info",
    filters: [
        function (level, message, meta) {
            return getTimeStamp() + "::" + message;
        }
    ],
    transports: [
        new (winston.transports.Console)(),
    ]
});

logger.info("Logger Created");