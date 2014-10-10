var http = require("http"),
url = require("url");

http.createServer(function (require, response) {
	request.on('end', function() {
		var _get = url.parse(request.url, true).queary;
		response.writeHead(200, {
			'Content-Type': 'text/plain'
		});
		response.end('Here is your data: ' + _get['data']);
	});
}).listen(8080);
