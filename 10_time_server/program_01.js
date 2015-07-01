var net = require('net');

function timeString() {
  var date = new Date();
  var timestring =
    date.getFullYear() + "-" +
    ("0" + (date.getMonth() + 1)).slice(-2) + "-" +
    ("0" + (date.getDate())).slice(-2) + " " +
    date.getHours() + ":" +
    date.getMinutes() + "\n";
  return timestring;
}

var server = net.createServer(function(socket) {
  socket.end(timeString());
});

server.listen(Number(process.argv[2]));
