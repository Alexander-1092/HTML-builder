const fs = require("fs");
const path = require("path");
const { stdin, stdout } = process;

stdout.write("Hi! Enter text:\n");//We display a greeting
stdin.on("data", (data) => {
	const pathFile = path.join(__dirname, '02-write-file'); // The path to our file where the data is saved
	if (pathFile) { // If the file already exists, then add it
		fs.appendFile(
			path.join(__dirname, '02-write-file'),
			data, //Inserting the received data
			(err) => { //Check in case of error
				if(err) throw err
		})	
	} else { // If the file does not exist, then create it
		fs.writeFile(
			path.join(__dirname, '02-write-file'),
			data,
			(err) => {
				if(err) throw err
		})
	};
});

process.on('SIGINT', function() {//catching the completion event
	stdout.write('Bye');
	process.exit();
})