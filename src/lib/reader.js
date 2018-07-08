'use strict';

const fs = require('fs');
const logger = require('./logger');

const fileReader = module.exports = {};

fileReader.readFile = (dataArray, callback) => {
  return fs.readFile(dataArray, (err, data) => {
    if (err) callback(err);
    logger.log(logger.INFO, data.toString());
  });
};

fileReader.readThreeFiles = (dataArray, callback) => {
  console.log(dataArray, 'testing data array');
  return fs.readFile(dataArray[0], (err1, data1) => {
    if (err1) return callback(err1);
    console.log(data1);
    return fs.readFile(dataArray[1], (err2, data2) => {
      if (err2) return callback(err2);
      console.log(data2);
      return fs.readFile(dataArray[2], (err3, data3) => {
        if (err3) return callback(err3);
        console.log(data3);
        return callback(null, data1.toString(), data2.toString(), data3.toString());
      });
    });
  });
};
