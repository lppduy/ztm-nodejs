// const request = require('./request');
const { send } = require('./request');
const { read } = require('./response');
// const read = require('./response');
const { REQUEST_TIMEOUT } = require('./request');

function makeRequest(url, data) {
  send(url, data);
  return read();
  // return read();
}

const responseData = makeRequest('https://google.com', 'hell yeaah');

console.log(responseData);

// ** nodejs, mongoDB -> common js modules is more popular
// es6 modules -> MORE on FE

// console.log(require.cache);

/**
Index.js is a special case that allows you to export functions from many different modules

that live in a single folder from a single point, 

which can then be referenced using the name of that folder or the path to that folder.
 */
