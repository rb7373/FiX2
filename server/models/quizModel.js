var mongoose = require('mongoose');

var questionSchema = mongoose.Schema({
	_id: {type: Number},
	question: {type: String},
	type: {type: String},
	choises: [{}],
	answers: [Number]
});

var quizSchema = mongoose.Schema({
	title: {type: String},
	topics: [String],
	questions: [questionSchema],
	tags: [String]
});

var quizModel = mongoose.model('Quices', quizSchema);

function createDefaultQuices(){
	quizModel.find({}).exec(function(err, collection) {
    	if(collection.length === 0) {
    		console.log("No hay quices");
			quizModel.create({
				title: "Angular quiz",
				topics: ["newton laws"],
				questions: [
					{
						_id: 1,
						question: "AngularJS is written completely in JavaScript?",
						type: "True-False",
						choises: ["True", "False"],
						answers: [1]
					},
					{
						_id: 2,
						question: "AngularJS 1.0 was released in 2013?",
						type: "True-False",
						choises: ["True", "False"],
						answers: [2]
					}
				],
				tags: ["Newton laws"]
			});
		}
	})
}

exports.createDefaultQuices = createDefaultQuices;