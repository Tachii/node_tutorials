var http = require('http');
var fs = require('fs');
var text = "";

var server = http.createServer(function(req, res) {
  req.on('data', function(chunk) {
    if (req.method == 'POST'){
      text += chunk;
    }
    else
      console.log('POST Request expected, recieved:' + req.method);
  });

  req.on('end', function() {
    res.end(text.toUpperCase());
  });

});

server.listen(Number(process.argv[2]));
