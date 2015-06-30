var mymodule = require('./module.js');

var dir = process.argv[2];
var ext = process.argv[3];

mymodule(dir, ext, function(err, list) {
  if (err)
    throw err;
  else {
    var ln = list.length;
    var i = 0;
    for (i; i < ln; i++)
      console.log(list[i]);
  }
});
