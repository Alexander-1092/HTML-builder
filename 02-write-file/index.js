const fs = require("fs");
const path = require("path");
const { stdin, stdout } = process;

stdout.write("Hi! Enter text:\n");
stdin.on("data", (data) => {
  let str = '';
  str = data;
	const pathFile = path.join(__dirname, '02-write-file');
	if (pathFile) {
		fs.appendFile(
			path.join(__dirname, '02-write-file'),
			str,
			(err) => {
				if(err) throw err
		})	
	} else {
		fs.writeFile(
			path.join(__dirname, '02-write-file'),
			str,
			(err) => {
				if(err) throw err
		})
	}
});

