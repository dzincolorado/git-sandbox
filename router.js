
function route(handle, pathname) {
	console.log("About to route a request for " + pathname);
	if(typeof handle[pathname] === 'function'){
		return handle[pathname]();
	}
	else {
		console.log('no handler found for ' + pathname);
		return "awwww snap, no handler available";
	}
}

exports.route = route;
