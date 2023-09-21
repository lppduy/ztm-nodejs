const express = require('express');

const app = express();

const PORT = 3000;

const friends = [
  { id: 0, name: 'Sir Le Pham Phuong Duy' },
  {
    id: 1,
    name: 'Genghis Khan',
  },
];

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.url} ${delta} ms`);
});

app.use(express.json());

// friends
app.post('/friends', (req, res) => {
  if (!req.body.name) {
    return res.status(400).json({
      error: 'missing friend name',
    });
  }

  const newFriend = {
    name: req.body.name,
    id: friends.length,
  };

  friends.push(newFriend);

  res.json(newFriend);
});

app.get('/friends', (req, res) => {
  res.json(friends);
});

app.get('/friends/:friendId', (req, res) => {
  const friendId = Number(req.params.friendId);
  const friend = friends[friendId];
  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json({
      error: 'friends does not exist, poor uuu',
    });
  }
});
// messages
app.get('/messages');

app.post('/messages');

// >>>>>>>>>>>
app.listen(PORT, () => {
  console.log(`LISTENING ON ${PORT}... 🚀🚀🚀`);
});
