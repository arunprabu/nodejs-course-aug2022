// read file asynchronously 
// so it is non-blocking I/O 

const fs = require('fs');

fs.readFile('sample.txt', (err, data) => { // error-first callback 
  if(!err){
    console.log(data.toString()); // we converted the data to String
    console.log(Buffer.byteLength(data)); // to see the buffer length -- Buffer is from global
  }else{
    console.log(err);
  }
});

console.log('Program Ended');