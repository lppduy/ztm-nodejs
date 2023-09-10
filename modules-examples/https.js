// const request = require('./request');
const { send } = require('./request');
const { read } = require('./response');
// const read = require('./response');

function makeRequest(url, data) {
  send(url, data);
  return read();
  // return read();
}

const responseData = makeRequest('https://google.com', 'hell yeaah');

console.log(responseData);
