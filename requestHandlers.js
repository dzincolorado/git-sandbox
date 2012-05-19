var exec = require('child_process').exec;
var fs = require('fs');
var formidable = require('formidable');

var imageLocation = "/tmp/test.jpg";

//var scripts = ["../assets/styles/bootstrap.css", "../assets/styles/bootstrap-responsive.css"];

function start(request, response) {
	console.log("handling start request");

	response.render('start', {title : "Start Upload", content : "Testing uploads", alertMessage: "", alertType: ""});

}

function upload(request, response, next) {
	console.log("handling upload request");

	fs.rename(request.files.flUpload.path, imageLocation);

	response.render('upload', {title: "Uploaded Image", 
		content: "You've sent: {T: '" + request.body.txtTitle + "', U: '" + request.files.flUpload.name + "'}",
		alertMessage : "Successfully uploaded!",
		alertType: "success",
		imageSource: "/show"});

}

function show(request, response){
	console.log('Show is being handled');
	fs.readFile(imageLocation, 'binary', function(error, file){
		if(error){
			response.render('show', {title: "", alertMessage: "an error occurred uploading your image", alertType: "error"});
			console.log("error loading file");
		}
		else{
			//TODO: need to figure out how to render the image in the template.
			//response.render('show', file);
			response.writeHead('Content-Type', 'image/jpg');
			response.write(file, 'binary');
			response.end();
		}
	});
}

exports.start = start;
exports.upload = upload;
exports.show = show;