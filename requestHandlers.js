var exec = require('child_process').exec;
var dataChunkHandler = require('./DataChunkHandler');
var fs = require('fs');

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
	response.render('upload', {title: "Uploaded content", 
		content: "You've sent: {T: '" + postData['title'] + "', U: '" + postData['upload'] + "'}"});
}

function show(request, response){
	console.log('Show is being handled');
	fs.readFile('/tmp/test.png', 'binary', function(error, file){
		if(error){
			response.render('show', {errorMessage: "an error occurred uploading your image"});
		}
		else{
			//TODO: need to figure out how to render the image in the template.
			//response.render('show', file);
			response.writeHead('Content-Type', 'image/png');
			response.write(file, 'binary');
			response.end();
		}
	});
}

exports.start = start;
exports.upload = upload;
exports.show = show;