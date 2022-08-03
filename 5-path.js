const path = require('path');

const fileName = __filename; // name of the file with directory and extn
console.log(fileName); 

const baseName = path.basename(fileName);
console.log(baseName); // filename with the extn

const extn = path.extname(fileName);
console.log(extn); // prints only the extn with dot
