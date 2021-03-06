var mongoose = require('mongoose');
var topicModel = require('../models/topicModel');
var quizModel = require('../models/quizModel');


module.exports = function(config) {
    mongoose.connect(config.db);
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error...'));
    db.once('open', function callback() {
        console.log('FiX db opened');
    });
    
    topicModel.createDefaultTopics();
    quizModel.createDefaultQuices();
};

