var mongoose = require('mongoose');

var topicSchema = mongoose.Schema({
	title: {type: String, required: '{PATH} is required!'},
	featured: {type: Boolean, required: '{PATH} is required!'},
	summary: {type: String, required: '{PATH} is required!'},
	content: {type: String, required: '{PATH} is required!'},
	published: {type: Date, required:'{PATH} is required!'},
	tags: [String],
	topic: String
});

var topic = mongoose.model('Topics', topicSchema);

function createDefaultTopics(){
	topic.find({}).exec(function(err, collection) {
    	if(collection.length === 0) {
			topic.create({
				title:"Newton's First Law",
				featured: true,
				summary: "Newton's first law of motion - sometimes referred to as the law of inertia.",
				content: "Newton's first law of motion is often stated as:\nAn object at rest stays at rest and an object in motion stays in motion with the same speed and in the same direction unless acted upon by an unbalanced force.",
				published: new Date('12/1/2015'),
				tags: ["Newton","inertia"],
				topic: 'newton first law'
			});
			topic.create({
				title:"Vectors and Direction",
				featured: false,
				summary: "A study of motion will involve the introduction of a variety of quantities that are used to describe the physical world. Examples of such quantities include distance, displacement, speed, velocity, acceleration, force, mass, momentum, energy, work, power, etc.",
				content: "A vector quantity is a quantity that is fully described by both magnitude and direction. On the other hand, a scalar quantity is a quantity that is fully described by its magnitude. The emphasis of this unit is to understand some fundamentals about vectors and to apply the fundamentals in order to understand motion and forces that occur in two dimensions.",
				published: new Date('7/1/2015'),
				tags: ["Vectors","Scalars"],
				topic: 'vectors and scalars'
			});
		}
	})
}

exports.createDefaultTopics = createDefaultTopics;