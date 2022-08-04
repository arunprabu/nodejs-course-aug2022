const fs = require('fs');

const readerStream = fs.createReadStream('example.txt', 'utf8');

readerStream.on('data', (chunk) => { // data is an event emitted upon successful createReadStream
  // when the data is so big with more content/video -- you would see many chunks from files 
  console.log('=============================');
  console.log('NEW CHUNK ARRIVED');
  console.log('=============================');
  console.log(chunk);
  console.log(Buffer.byteLength(chunk)); // to see the buffer length -- Buffer is from global
});

readerStream.on('error', (error) => {
  console.log(error);
});

readerStream.on('end', () => { // end is an event emitted when more to read 
  console.log('******************** All Chunks Arrived ******************** ');
});

