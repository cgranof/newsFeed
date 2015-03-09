var News = require('../news.js');

News.find({}, function(err, results){
	if(results.length === 0) {
		var item1 = new News({
			title: 'Lizard befriends small dog',
			url: '',
			author: 'Me',
			votes: 0,
			tages: ['Lizard', 'dog'],
			date: new Date (),
			content: 'Salizar loves to play with Odette',
			imageUrl:''
		});
		item1.save();

		var item2 = new News({
			title: 'Llamas on the loose',
			url: '',
			author: 'Bret',
			votes: 0,
			tages: ['Llama', 'great escapes'],
			date: new Date (),
			content: 'Llama\'s get loose and run amuck',
			imageUrl:''
		});
		item2.save();
	}
});