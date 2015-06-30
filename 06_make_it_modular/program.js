var mymodule = require('./module.js');

var dir = process.argv[2];
var ext = process.argv[3];

mymodule(dir, ext, function(err, list) {
  if (err)
    throw err;
  else {
    list.forEach(function(something){
      console.log(something);
    });
  }
});
