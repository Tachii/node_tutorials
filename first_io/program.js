var fs = require('fs');

var filename = 'test.txt';

file = fs.readFileSync(filename);

contents = file.toString();

console.log(contents.split('\n').length - 1);
