var exec = require('child_process').exec;
var dataChunkHandler = require('./DataChunkHandler');

//var scripts = ["../assets/styles/bootstrap.css", "../assets/styles/bootstrap-responsive.css"];

function start(request, response) {
	console.log("handling start request");

	//var postData = dataChunkHandler(request, response);
	response.render('start', {title : "Start Upload", content : "Test this upload, sir.", /*scripts:scripts*/ });

}

function upload(request, response, next) {
	console.log("hanlding upload request");
	/*
	response.writeHead(200, {"Content-Type":"text/plain"});
	response.write("Uploading...");
	response.end();
	*/
	var postData = request.param('txt', null);//querystring.parse(postData).text;;
	console.log(postData);
	response.render('start', {title: "Uploaded content", 
		content: "You've sent: {T: '" + postData['title'] + "', U: '" + postData['upload'] + "'}"});
}

exports.start = start;
exports.upload = upload;
