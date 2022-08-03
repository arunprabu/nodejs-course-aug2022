// buffer

const dummyText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce efficitur leo hendrerit maximus efficitur. Vivamus bibendum dolor sed lectus luctus, non interdum dolor faucibus. Mauris porttitor pellentesque orci vitae auctor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In tempor diam dui, vel ornare sapien consequat sit amet. Nam ipsum nibh, finibus aliquet tellus et, imperdiet bibendum arcu.';

const buffer = new Buffer.from(dummyText, 'utf8'); // getting buffer out of string 'dummyText'

console.log(buffer); // prints the content in buffer format
console.log(buffer.toString()); // prints the content in string format
console.log(buffer.toJSON()); // prints the content in JSON format

// the above shows the type as Buffer and also data in an array of Unicode characters 
// inside the array you can find 76 as first item, which represents 'L' 
// Refer: https://www.codetable.net/decimal/76

console.log(buffer[0]); // you will get 76

console.log('===========');
buffer.write('NodeJS is Awesome!'); // will replace first 18 chars of dummyText
console.log(buffer.toString()); 