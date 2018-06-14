'use strict';

// const logger = require('./logger');
// const fs = require('fs');

const fileReader = module.exports = {};

const data1 = `${__dirname}/./lib/data/data1.txt`;
// const data2 = `${__dirname}/./lib/data/data2.txt`;
// const data3 = `${__dirname}/./lib/data/data3.txt`;

// this reads a single file path
fileReader.readFile(data1);
