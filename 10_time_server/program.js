var net = require('net');
var date = new Date();

var server = net.createServer(function(socket) {
  var timestring = date.getFullYear() + "-" + ("0" + (date.getMonth() + 1)).slice(-2) + "-" +
  ("0" + (date.getDate())).slice(-2) + " " + date.getHours() + ":" + date.getMinutes() + "\n";
  socket.end(timestring);
});
server.listen(process.argv[2]);
