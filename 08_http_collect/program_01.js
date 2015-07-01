var http = require('http');
var dataArr = [];

http.get(process.argv[2], function(res) {
  res.setEncoding('utf8');
  res.on('data', function(data) {
    dataArr.push(data);
  });
  res.on('end', function() {
    console.log(dataArr.join("").length);
    console.log(dataArr.join(""));
  });
}).on('error', function(e) {
  console.log("Got error: " + e.message);
});
