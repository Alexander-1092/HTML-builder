const fs = require('fs');
const path = require('path');

const arrFile = [];

const pathFolder = path.resolve(__dirname, 'files');
fs.readdir(pathFolder, (err, files) => {
  files.forEach((file) => {
    arrFile.push(file);
  });
  craeteFolder();
});

const craeteFolder = () => {
  fs.mkdir(path.join(__dirname, 'files-copy'), (err) => {
    if (err) throw err;
  });
  createFiles(arrFile);
};

const createFiles = (arrFile) => {
  arrFile.forEach((file) => {
    fs.writeFile(path.join(__dirname, 'files-copy', file), '', (err) => {
      if (err) throw err;
    });
  });
  copyFile(arrFile);
};

const copyFile = (arrFile) => {
  arrFile.forEach((file) => {
    fs.copyFile(
      path.resolve(__dirname, 'files', file),
      path.resolve(__dirname, 'files-copy', file),
      (err) => {
        if (err) throw err;
        console.log('File copied successfully');
      },
    );
  });
};
