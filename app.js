var http = require('http');

var server = http.createServer(function(request, response) {
	response.writeHead(2000, {
		'Content-type': 'text/bold'
	});
	response.end('Hello World');
});

server.listen(8000);

console.log('Listening on http://127.0.0.1:8000');
console.log('Babaganush!');
