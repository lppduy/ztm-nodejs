// exports.REQUEST_TIMEOUT = 500;
const REQUEST_TIMEOUT = 500;

function encrypt(data) {
  return 'encrypted data';
}

function send(url, data) {
  const encryptedData = encrypt(data);
  console.log(`sending ${encryptedData} to ${url}`);
}

module.exports = {
  REQUEST_TIMEOUT,
  send,
};

// console.log(module);
// module: a global built in that contains data related to the current module

console.log('hell yeah from request.js!');
