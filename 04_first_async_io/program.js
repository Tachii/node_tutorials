var fs = require('fs');
var path = process.argv[2];

fs.readFile(path, 'utf8', function(err,data) {
  var lines = data.split('\n');
  console.log(lines.length-1);
});
