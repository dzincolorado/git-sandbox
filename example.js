var http = require('http');

http.createServer(function(request, response)
{
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end('This is my first simple nodejs server and I like it!\n');
}).listen(8124);

console.log('server running at 127.0.0.1:8124');
