var fs = require('fs');
var path = require('path');
//Directory Path
var dir = process.argv[2];
//File Extension
var ext = '.'+process.argv[3];

fs.readdir(dir, function(err, list) {
  var ln = list.length;
  var i = 0;
  for (i; i < ln; i++) {
    if (path.extname(list[i]) == ext) {
      console.log(list[i]);
    }
  }
});
