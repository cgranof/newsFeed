var News = require('../models/news.js');

var newsController = {
	getAll: function(req, res){
		if(req.query._id){
			News.findById(req.query._id, function(err, result){
				res.send(result);
			});
		} else {
			News.find({}, function(err, results){
				res.send(results);
			});
		}
	},
	createNew: function(req, res){
		var newNews = new News(req.body);
		newNews.save(function(err, result){
			res.send(result);
		});
	}
};

module.exports = newsController;