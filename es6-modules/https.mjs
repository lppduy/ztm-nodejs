import { send } from './request.mjs';
import { read } from './response.mjs';

function makeRequest(url, data) {
  send(url, data);
  return read();
}

const responseData = makeRequest('https://google.com', 'hell yeaah');

console.log(responseData);

// nodejs, mongoDB -> common js modules is more popular
// es6 modules -> MORE on FE
