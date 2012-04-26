var requestHandlers = require('./requestHandlers');
var express = require('express')

var app = module.exports = express.createServer();

app.get('/', requestHandlers.start);
app.get('/start', requestHandlers.start);
app.get('/upload', requestHandlers.upload);

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.set('view options', {layout: false})
app.use(express.bodyParser());
app.use(express.static(__dirname + '/assets'));

app.listen(8888);

console.log("Now listening on " + app.address().port);
