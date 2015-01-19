var quizMongoose = require('mongoose').model('Quices');

exports.getQuizList = function(req, res) {
  quizMongoose.find({}).exec(function(err, collection) {
    res.send(collection);
  })
};

exports.getQuizByTopic = function(req, res) {
  console.log("Buscando QuizByTopic");
  console.log(req.params.id);
  topicMongoose.findOne({_id:req.params.id}).exec(function(err, topic) {
    res.send(topic);
  })
}