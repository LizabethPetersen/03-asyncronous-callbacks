'use strict';

const fs = require('fs');
const fileReader = require('../lib/reader');

// describe('testing to see if I am connected to TravisCI', () => {
// test('should equal true', () => {
// expect(true).toEqual(true);
// });
// });
const mockArray = [
  mockData1 = `${__dirname}/../data/data1.txt`,
  mockData2 = `${__dirname}/../data/data2.txt`,
  mockData3 = `${__dirname}/../data/data3.txt`,
];

describe('testing fileReader module that reads given files', () => {
  beforeAll(() => {
    mockArray = [
      fs.readFileSync(mockData1, { encoding: 'utf-8' }),
      fs.readFileSync(mockData2, { encoding: 'utf-8' }),
      fs.readFileSync(mockData3, { encoding: 'utf-8' }), 
    ];
  });
 
  test('should show that the data in our readThreeFiles equals the filePath array', (done) => {
    fileReader.readThreeFiles(mockArray, (err, data1, data2, data3) => {
      expect(data1).toEqual(mockData1[0]);
      expect(err).toBeNull();
      expect(data2).toEqual(mockData2[1]);
      expect(err).toBeNull();
      expect(data3).toEqual(mockData3[2]);
      expect(err).toBeNull();
      done();
    });
  });
 
  test('should return an error for bad file path on first item', () => {
    fileReader.readThreeFiles(['bad path', filePath2, filePath3], (err) => {
      expect(err).toHaveProperty('errno');
      expect(err.code).toEqual('ENOENT');
    });
  });
});
