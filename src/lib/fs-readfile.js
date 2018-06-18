'use strict';

const fs = require('fs');

const file = `${__dirname}/../data/data1.txt`;
const logger = require('./logger');

fs.readFile(file, (err, incomingData) => {
  if (err) {
    throw (err);
  }
  logger.log(logger.INFO, `Using Winston to log incoming data ${incomingData.toString()}`);
});

