// read file synchronously 
// so it is blocking I/O 

const fs = require('fs');  // importing file system module

const data = fs.readFileSync('sample.txt'); // synchronously reading the file

console.log(data.toString());

// will be printed at last as the pgm runs -- only after file read completely 
console.log('Program Ended');



