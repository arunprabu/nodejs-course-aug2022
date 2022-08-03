const fs = require('fs');

const content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nisl nisi, rhoncus ut ipsum ac, facilisis venenatis dolor.';

console.log('Before Writing File');

// writing file async'ly 
fs.writeFile('example.txt', content, (err) => {
  if(!err){
    console.log('File written successfully!');
  }else{
    console.log(err);
  }
});

console.log('============ Program Ended ========');
