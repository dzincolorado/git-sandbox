var exec = require('child_process').exec;

//var scripts = ["../assets/styles/bootstrap.css", "../assets/styles/bootstrap-responsive.css"];

function start(request, response) {
	console.log("handling start request");

	response.render('start', {title : "Start Upload", content : "Test this upload, sir.", /*scripts:scripts*/ });

}

function upload(request, response) {
	console.log("hanlding upload request");
	response.writeHead(200, {"Content-Type":"text/plain"});
	response.write("Uploading...");
	response.end();
}

exports.start = start;
exports.upload = upload;
