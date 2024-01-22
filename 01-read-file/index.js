const path = require('path');
const fs = require('fs');

const stream = fs.createReadStream(path.join(__dirname, 'text.txt'), 'utf-8'); // indicate the path
let data = ''; //we connect parts of the text in a variable

stream.on('data', (chunk) => (data += chunk)); //passing parts of the text to a variable
stream.on('end', () => console.log(data)); // we end the event and output everything in the variable
stream.on('error', (error) => console.log('Oops, error', error.message)); //error event
