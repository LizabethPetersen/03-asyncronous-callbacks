'use strict';

const fs = require('fs');
const fileReader = require('../lib/reader');

describe('testing to see if I am connected to TravisCI', () => {
  test('should equal true', () => {
    expect(true).toEqual(true);
  });
});

const mockData1 = `${__dirname}/mock-assets/mock-data1.txt`;
const mockData2 = `${__dirname}/mock-assets/mock-data2.txt`;
const mockData3 = `${__dirname}/mock-assets/mock-data3.txt`;

let mockData = [];

describe('testing fileReader module that reads given files', () => {
  beforeAll(() => {
    mockData = [
      fs.readFileSync(mockData1, { encoding: 'utf-8' }),
      fs.readFileSync(mockData2, { encoding: 'utf-8' }),
      fs.readFileSync(mockData3, { encoding: 'utf-8' }), 
    ];
  });
 
  test('Should show that the data in our readThreeFiles equals the data array', () => {
    fileReader.readThreeFiles(mockData, (err, data1, data2, data3) => {
      console.log(mockData);
      expect(data1).toEqual(mockData1[0]);
      expect(err).toBeNull();
      expect(data2).toEqual(mockData2[1]);
      expect(err).toBeNull();
      expect(data3).toEqual(mockData3[2]);
      expect(err).toBeNull();
    });
  });
 
  test('Should return an error for bad file path on first item', () => {
    fileReader.readThreeFiles(['bad path', mockData2, mockData3], (err) => {
      expect(err).toHaveProperty('errno');
      expect(err.code).toEqual('ENOENT');
    });
  });
});
