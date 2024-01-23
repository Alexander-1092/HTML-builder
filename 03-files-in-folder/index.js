const path = require('path');
const fs = require('fs');
const arrFile = [];
let pathFile = [];

const pathFolder = path.resolve(__dirname, 'secret-folder');
fs.readdir(pathFolder, (err, files) => {
  files.forEach((file) => {
    arrFile.push(file);
  });
  iterateFiles(arrFile);
});

const iterateFiles = (arrFile) => {
  arrFile.forEach((file) => {
    pathFile.push(path.resolve(__dirname, 'secret-folder', file));
  });
  rez();
};

const rez = () => {
  pathFile.forEach((file) => {
    fs.stat(file, (err, stats) => {
      let name = path.basename(file, path.extname(file));
      let extension = path.basename(path.extname(file)).slice(1);
      console.log(name + '-' + extension + '-' + String(stats.size));
    });
  });
};
