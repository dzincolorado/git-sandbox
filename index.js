var requestHandlers = require('./requestHandlers');
var express = require('express')
var RedisStore = require('connect-redis')(express);

var app = module.exports = express.createServer();

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.set('view options', {layout: false})
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.static(__dirname + '/assets'));
app.use(express.cookieParser());
app.use(express.session({secret: "my secret passphrase", store: new RedisStore}));

app.get('/', requestHandlers.start);
app.get('/start', requestHandlers.start);
app.post('/upload', requestHandlers.upload);
app.get('/show', requestHandlers.show);

app.listen(8888);

console.log("Now listening on " + app.address().port);
