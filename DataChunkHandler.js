/**
 * @author dziegler
 */
//var exec = require('child_process').exec;
var querystring = require('querystring');

function HandleDataChunks(request, response)
{
	request.setEncoding('utf8');
	console.log("inside handle data chunks");
	
	var postData = "";
	request.addListener("data", function(postDataChunk) {
		postData +=	postDataChunk;
		console.log("Received POST data chunk" + postDataChunk + "'.");
		
	});
	
	request.addListener("end", function(postDataChunk){
		//route the request
		//route(handle, pathname, response, postData)
		return querystring.parse(postData).text;
	});
}

exports.HandleDataChunks = HandleDataChunks;