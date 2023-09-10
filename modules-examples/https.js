const request = require('./request');
const response = require('./response');

function makeRequest(url, data) {
  // logic here
  request.send(url, data);
  return response.read();
}

const responseData = makeRequest('https://google.com', 'hell yeaah');

console.log(responseData);