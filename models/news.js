var mongoose = require('mongoose');

var newsSchema = mongoose.Schema({
	title: String,
	url: String,
	author: String,
	votes: Number,
	tages: [String],
	date: {
		type: Date,
		default: new Date()
	},
	content: String,
	imageUrl: String
});


module.exports = mongoose.model('News' , newsSchema);
