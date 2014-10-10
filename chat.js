net = require('net');

var sockets = [];

var s = net.Server(function(socket) {
	sockets.push(socket);

	socket.on('data', function(d) {
		for (var i = o; i <sockets.length; i++) {
			sockdets[i].write(d);
		}
	});

	socket.on('end', function() {
		var i = sockets.indexOf(socket);
		sockets.splice(i, 1);
	});
});

s.listen(8000);
