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
		content = stdout;
	});

	return content;
}

function upload(request, response) {
	console.log("hanlding upload request");
	return "Uploading...";
}

exports.start = start;
exports.upload = upload;
