'use strict';

const fs = require('fs');
const logger = require('./logger');

const fileReader = module.exports = {};

// this reads a single file path
fileReader.readFile = (dataArray, cb) => {
  return fs.readFile('./data/data1.txt', (err, data1) => {
    if (err) throw err;
    logger.log(logger.INFO, data1.toString());
  });
};

// this reads three file paths
fileReader.readFile = (dataArray, cb) => {
  return fs.readFile(dataArray[0], (err, data1) => {
    if (err) return cb(err);
    return fs.readFile(dataArray[1], (err2, data2) => {
      if (err2) return cb(err2);
      return fs.readFile(dataArray[2], (err3, data3) => {
        if (err3) return cb(err3);
        return cb(null, data1.toString(), data2.toString(), data3.toString());
      });
    });
  });
};
