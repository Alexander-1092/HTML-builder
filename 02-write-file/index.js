const fs = require('fs');
const path = require('path');
const { stdin, stdout } = process;

stdout.write('Hi! Enter text:\n'); //We display a greeting
stdin.on('data', (data) => {
  const pathFile = path.join(__dirname, '02-write-file'); // The path to our file where the data is saved
  if (pathFile) {
    fs.appendFile(
      path.join(__dirname, '02-write-file'),
      data, //Inserting the received data
      (err) => {
        if (err) throw err;
      },
    );
  } else {
    fs.writeFile(path.join(__dirname, '02-write-file'), data, (err) => {
      if (err) throw err;
    });
  }
});

process.on('SIGINT', () => {
  stdout.write('Bye');
  process.exit();
});
