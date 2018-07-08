'use strict';

const fs = require('fs');
require('./lib/reader');

const data1 = `${__dirname}/./lib/assets/data1.txt`;
const data2 = `${__dirname}/./lib/assets/data2.txt`;
const data3 = `${__dirname}/./lib/assets/data3.txt`;

let dataArray = [];

dataArray = [
  fs.readFileSync(data1, { encoding: 'utf-8' }),
  fs.readFileSync(data2, { encoding: 'utf-8' }),
  fs.readFileSync(data3, { encoding: 'utf-8' }), 
];

console.log(dataArray); // eslint-disable-line
