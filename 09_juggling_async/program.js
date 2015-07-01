var http = require('http');
var dataStream = [];
var dataArr = [];
var count = 0;
/*
 Function to print results
 @dataArr - array
*/
function printResults(dataArr) {
  for (var i = 0; i < process.argv.length - 2; i++)
    console.log(dataArr[i]);
}

/*
  Function to get data from http
  @i - int
  Getting command line arguments as parametrs.
*/
function httpGet(i) {
  http.get(process.argv[2 + i], function(res) {

    res.setEncoding('utf8');

    res.on('data', function(data) {
      dataStream.push(data);
    });

    res.on('end', function() {
      dataArr[i] = (dataStream.join(""));
      dataStream = [];
      count++;
      if (count == process.argv.length - 2) {
        printResults(dataArr);
      }
    });

    res.on('error', function(e) {
      console.log("Got error: " + e.message);
    });
  });
}

for (var i = 0; i < process.argv.length - 2; i++) {
  httpGet(i);
}
