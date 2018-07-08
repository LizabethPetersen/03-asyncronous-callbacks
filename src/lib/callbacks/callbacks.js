'use strict';

const myCallback = (data) => {
  console.log('2: Received', data);
};

myCallback();

const useMyCallback = (callback) => {
  const text = 'some random text';
  console.log('1: Calling the callback');
  callback(text);
  console.log('3: After the callback');
};

useMyCallback();

const errorFirstCallback = (err, data) => {
  if (err) {
    return console.log('2: ERROR: ', err);
  }
  return console.log('2: SUCCESS: Received: ', data);
};

const useErrorFirstCallback = (text, callback) => {
  try {
    if (!text || typeof text !== 'string') {
      throw new TypeError(`${text} is not a string`);
    }
    console.log('1: Calling the error first callback with successful text input');
    callback(undefined, text);
    console.log('3: SUCCESS: After the error first callback with successful text input');
  } catch (err) {
    console.log('1: Calling the error first callback with ERROR');
    callback(err, null);
    console.log('3: ERROR: After the error first callback wit bad input');
  }
};

useErrorFirstCallback(11, errorFirstCallback);
