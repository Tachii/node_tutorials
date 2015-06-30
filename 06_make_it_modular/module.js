var fs = require('fs');
var path = require('path');

module.exports = myModule;

function myModule(dirname, filter, callback) {
  var ext = '.' + filter;
  var filelist = [];
  var i = 0;

  fs.readdir(dirname, function(err, list) {
    if (err) {
      return callback(err);
    } else {
      var ln = list.length;
      var i = 0;
      for (i; i < ln; i++) {
        if (path.extname(list[i]) == ext) {
          filelist.push(list[i]);
        }
      }
    }
    return callback(null, filelist);
  });

}
