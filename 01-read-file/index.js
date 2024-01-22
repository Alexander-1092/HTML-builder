const path = require('path');
const fs = require('fs');
const { stdout } = process;

const stream = fs.createReadStream(path.join(__dirname, 'text.txt'), 'utf-8'); // indicate the path
let combinedData = ''; //we connect parts of the text in a variable

stream.on('data', (chunk) => (combinedData += chunk)); //passing parts of the text to a variable
stream.on('end', () => stdout.write(combinedData)); // we end the event and output everything in the variable
