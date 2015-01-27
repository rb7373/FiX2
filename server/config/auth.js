var userModel     = require('../models/userModel');
var jwt        = require("jsonwebtoken");

exports.authenticateUser = function(req, res, next) {
    userModel.findOne({email: req.body.email, password: req.body.password}, function(err, user) {
        if (err) {
            res.json({
                type: false,
                data: "Error occured: " + err
            });
        } else {
            if (user) {
               res.json({
                    type: true,
                    data: user,
                    token: user.token
                }); 
            } else {
                res.json({
                    type: false,
                    data: "Incorrect email/password"
                });    
            }
        }
    });
};


exports.signin = function(req, res) {
    userModel.findOne({email: req.body.email, password: req.body.password}, function(err, user) {
        if (err) {
            res.json({
                type: false,
                data: "Error occured: " + err
            });
        } else {
            if (user) {
                res.json({
                    type: false,
                    data: "User already exists!"
                });
            } else {
                var newUserModel = new userModel();
                newUserModel.email = req.body.email;
                newUserModel.password = req.body.password;
                newUserModel.save(function(err, user) {
                    user.token = jwt.sign(user, process.env.JWT_SECRET);
                    user.save(function(err, userCreated) {
                        res.json({
                            type: true,
                            data: userCreated,
                            token: userCreated.token
                        });
                    });
                })
            }
        }
    });
};

exports.getProfile = function(req, res, next) {
    userModel.findOne({token: req.token}, function(err, user) {
        if (err) {
            res.json({
                type: false,
                data: "Error occured: " + err
            });
        } else {
            res.json({
                type: true,
                data: user
            });
        }
    });
};

exports.ensureAuthorized = function (req, res, next) {
    var bearerToken;
    var bearerHeader = req.headers["authorization"];
    if (typeof bearerHeader !== 'undefined') {
        var bearer = bearerHeader.split(" ");
        bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    } else {
        res.send(403);
    }
};
