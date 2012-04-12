var http = require('http')

http.createServer(onRequest).listen(8888);

function onRequest(request, response){
	writeToConsoleWrapper(writeToConsole, "Request received");
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hello World");
	response.end();
}

function writeToConsole(word)
{
	console.log(word);
}

function writeToConsoleWrapper(aFunction, word)
{
	aFunction(word);
}

writeToConsoleWrapper(writeToConsole, "Server started.");
