var auth = require("./auth");
var topics = require("../controllers/topicController");
var quiz = require("../controllers/quizController");


module.exports = function(app) {

	app.get('/api/topics/practices', quiz.getQuices);
	app.get('/api/topics/practices/:topic', quiz.getQuizByTopic);
	app.get('/api/topics', topics.getTopics);
	app.get('/api/topics/:id', topics.getTopicsById);
	
	

	app.get('/partials/*', function(req, res) {
		res.render('../../public/app/' + req.params[0]);

	});

	app.post('/login', auth.authenticate);
	app.post('/logout', function(req, res){
		req.logout();
		res.end();
	});

	app.all('/api/*', function(req, res){
		res.sendStatus(404);
	});

	app.get('*', function(req, res) {
		res.render('index');
	});
};