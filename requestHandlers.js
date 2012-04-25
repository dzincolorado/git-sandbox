var exec = require('child_process').exec;

function start(request, response) {
	console.log("handling start request");

	response.render('start');

}

function upload(request, response) {
	console.log("hanlding upload request");
	response.writeHead(200, {"Content-Type":"text/plain"});
	response.write("Uploading...");
	response.end();
}

exports.start = start;
exports.upload = upload;
