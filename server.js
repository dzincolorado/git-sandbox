var http = require('http')

http.createServer(onRequest).listen(8888);

function onRequest(request, response){
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hello World");
	writeToConsoleWrapper(writeToConsole, "this is now in a named method!");
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
