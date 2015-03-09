var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');
var newsController = require('./controllers/news.js');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/news');

require('./models/seeds/newsSeeds.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', indexController.index);

app.get('/api/news', newsController.getAll);
app.post('/api/news', newsController.createNew);

app.get('/templates/:templateid', indexController.getTemplate);

var server = app.listen(6640, function() {
	console.log('Express server listening on port ' + server.address().port);
});
