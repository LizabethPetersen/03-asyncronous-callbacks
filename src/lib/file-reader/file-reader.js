'use strict';

const fs = require('fs');
const logger = require('../logger');

const fileReader = module.exports = {};

// this reads a single file path
fileReader.readFile = (filePath, callback) => {
  console.log(filePath, 'testing filePath array');
  return fs.readFile('../../assets/data1.txt', (err, data1) => {
    if (err) throw err;
    logger.log(logger.INFO, data1.toString());
    return callback(data1.toString());
  });
};

fileReader.readThreeFiles = (filePath, callback) => {
  console.log(filePath, 'testing filePath array');
  return fs.readFile(filePath[0], (err1, data1) => {
    if (err1) return callback(err1);
    return fs.readFile(filePath[1], (err2, data2) => {
      if (err2) return callback(err2);
      return fs.readFile(filePath[2], (err3, data3) => {
        if (err3) return callback(err3);
        return callback(null, data1.toString(), data2.toString(), data3.toString());
      });
    });
  });
};

// fileReader.readThreeFiles = (dataArray, callback) => {
// console.log(dataArray, 'testing data array');
// return fs.readFile(dataArray[0], (err1, data1) => {
//   console.log(data1.toString(), 'WORD');
//   if (err1) return callback(err1);
//   return fs.readFile(dataArray[1], (err2, data2) => {
// if (err2) return callback(err2);
// return fs.readFile(dataArray[2], (err3, data3) => {
//   if (err3) return callback(err3);
//   return callback(null, data1.toString(), data2.toString(), data3.toString());
// });
//   });
// });
//   };

