var http = require('http')
var url = require('url')

function start(route, handle){
	function onRequest(request, response){
		
		if(processFavIcon(request, response))
		{
			var pathname = url.parse(request.url).pathname;
			writeToConsoleWrapper(writeToConsole, "Request for " + pathname + " received");

			response.writeHead(200, {"Content-Type": "text/plain"});
			response.write(route(handle, pathname));
			//response.write("Hello World");
		}
			response.end();
	}

	http.createServer(onRequest).listen(8888);
	writeToConsoleWrapper(writeToConsole, "Server started.");
}

exports.start = start;

function writeToConsole(word)
{
	console.log(word);
}

function writeToConsoleWrapper(aFunction, word)
{
	aFunction(word);
}

function processFavIcon(request, response)
{
	if(request.url == '/favicon.ico')
	{
		response.writeHead(200, {'Content-Type' : 'image/x-icon'});
		response.end();
		writeToConsoleWrapper(writeToConsole, 'favIcon handled');

		return false;
	}

	return true;
}
