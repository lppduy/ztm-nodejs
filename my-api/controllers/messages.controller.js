function getMassages(req, res) {
  res.send('<ul><li>Hello The King</li></ul>');
}

function postMessage(req, res) {
  console.log('updating messages...');
}

module.exports = {
  getMassages,
  postMessage,
};
