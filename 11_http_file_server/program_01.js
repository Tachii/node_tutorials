var http = require('http');
var fs = require('fs');
var server = http.createServer(function(req, res) {
  fs.createReadStream(process.argv[3]).on('open', function() {
    // This just pipes the read stream to the response object (which goes to the client)
    this.pipe(res);
  }).on('error', function(err) {
    this.end(err);
  });
});
server.listen(Number(process.argv[2]));
