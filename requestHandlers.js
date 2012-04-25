var exec = require('child_process').exec;

function start(request, response) {
	console.log("handling start request");
/*
	function sleep(milliSeconds) {
	    var startTime = new Date().getTime();
	    while (new Date().getTime() < startTime + milliSeconds);
	  }
	//sleep(10000);
*/

	var content = 'empty';
	exec("ls -lah", function(error, stdout, stderr){
		response.writeHead(200, {"Content-Type":"text/plain"});
		response.write(stdout);
		response.write("test");
		response.end();
	});
}

function upload(request, response) {
	console.log("hanlding upload request");
	response.writeHead(200, {"Content-Type":"text/plain"});
	response.write("Uploading...");
	response.end();
}

exports.start = start;
exports.upload = upload;
