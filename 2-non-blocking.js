// read file asynchronously 
// so it is non-blocking I/O 

const fs = require('fs');

fs.readFile('sample.txt', (err, data) => { // error-first callback 
  if(!err){
    console.log(data.toString());
  }else{
    console.log(err);
  }
});

console.log('Program Ended');