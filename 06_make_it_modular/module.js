var fs = require('fs');
var path = require('path');

module.exports = myModule;

function myModule(dirname, filter, callback) {
  var ext = '.' + filter;
  var filelist = [];

  fs.readdir(dirname, function(err, list) {
    if (err) {
      return callback(err);
    } else {
      list.forEach(function(something){
        if (path.extname(something) == ext) {
          filelist.push(something);
        }
      });
    }
    return callback(null, filelist);
  });

}
