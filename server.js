var http = require('http')

function start(){
	function onRequest(request, response){
		writeToConsoleWrapper(writeToConsole, "Request received");
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write("Hello World");
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
