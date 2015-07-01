var http = require('http');
var concat = require('concat-stream');

http.get(process.argv[2], function(response) {
  response.pipe(concat(function(data) {
    data = data.toString();
    console.log(data.length);
    console.log(data);
  }));
});
