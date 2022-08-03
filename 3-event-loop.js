const events = require('events'); 

const eventEmitter = new events.EventEmitter(); // creating an obj for event emitter class

// let's define custom event
eventEmitter.on('open_connection', (data) => {
  console.log('CONNECTION OPENED SUCCESSFULLY!');
  console.log(data);
  eventEmitter.emit('data_received'); // triggering the custom event
});

eventEmitter.on('data_received', () => {
  console.log('DATA Received Successfully!');
});

eventEmitter.emit('open_connection', 'wow'); // triggering the custom event

console.log('Program Ended');