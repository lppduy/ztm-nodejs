const EventEmitter = require('events');
const celebrity = new EventEmitter();

// subscribe to celebrity for Observer 1
celebrity.on('race', result => {
  if (result === 'win') {
    console.log('congras! you are the best 🔥');
  }
});

// subscribe to celebrity for Observer 2
celebrity.on('race', result => {
  if (result === 'win') {
    console.log('BOO! i could have better than that 🤡');
  }
});

process.on('exit', code => {
  console.log('Process exit event with code: ', code);
});

celebrity.emit('race', 'win');
celebrity.emit('race', 'lost');
