var http = require('http');
var url = require('url');

function parseRoutes(url) {
  if (url.pathname === '/api/parsetime') {
    var date = new Date(url.query.iso);
    return {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds()
    };
  } else if (url.pathname === '/api/unixtime') {
    return {
      unixtime: new Date(url.query.iso).getTime()
    };
  } else return null;
}

var server = http.createServer(function(req, res) {
  var urlPath = url.parse(req.url, true);
  var resourse = parseRoutes(urlPath);

  console.log(resourse);

  if (resourse) {
    res.writeHead(200, {
      'Content-Type': 'application/json'
    });
    res.end();
  } else {
    res.writeHead(404);
    res.end();
  }

  res.end(JSON.stringify(resourse));

});
server.listen(process.argv[2]);
