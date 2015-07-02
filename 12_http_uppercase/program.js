var http = require('http');
var fs = require('fs');
var output = "";

var server = http.createServer(function(req, res) {
  req.on('data', function(chunk) {
    if (req.method == 'POST'){
      output += chunk;
      console.log(body);
    }
    else
      console.log('POST Request expected, recieved:' + req.method);
  });

  req.on('end', function() {
    res.end(output.toUpperCase());
  });

});

server.listen(Number(process.argv[2]));
