var passport = require('passport');
var mongoose = require('mongoose');
var localStrategy = require('passport-local').Strategy;
var userModel = mongoose.model('User');

module.exports = function() {
    passport.use(new localStrategy(
        function(userName, password, done) {
            userModel.findOne({
                userName: userName
            }).exec(function(err, user) {
                if (user && user.authenticate(password)) {
                    return done(null, user);
                } else {
                    return done(null, false);
                }
            })
        }
    ));

    passport.serializeUser(function(user, done) {
        if (user) {
            done(null, user._id);
        }
    });

    passport.deserializeUser(function(id, done) {
        userModel.findOne({
            _id: id
        }).exec(function(err, user) {
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        })
    })

}