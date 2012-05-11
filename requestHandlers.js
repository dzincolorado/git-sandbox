var exec = require('child_process').exec;
var dataChunkHandler = require('./DataChunkHandler');

//var scripts = ["../assets/styles/bootstrap.css", "../assets/styles/bootstrap-responsive.css"];

function start(request, response) {
	console.log("handling start request");

	//var postData = dataChunkHandler(request, response);
	response.render('start', {title : "Start Upload", content : "Test this upload, sir.", /*scripts:scripts*/ });

}

function upload(request, response) {
	console.log("hanlding upload request");
	/*
	response.writeHead(200, {"Content-Type":"text/plain"});
	response.write("Uploading...");
	response.end();
	*/
	
	var postData = dataChunkHandler(request, response);
	response.render('start', {title: "Uploaded content", content: "You've sent: " + postData})
}

exports.start = start;
exports.upload = upload;
