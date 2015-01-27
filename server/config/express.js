var express = require("express");
var stylus = require('stylus');
var logger = require('morgan');
var bodyParser = require('body-parser');
var multer = require('multer');

module.exports = function(app, config) {

	function compile(str, path) {
		return stylus(str).set('filename', path);
	};


	app.set('views', config.rootPath + '/server/views');
	app.set('view engine', 'jade');

	app.use(logger('dev'));

	// parse application/json
	app.use(bodyParser.json());

	// parse application/x-www-form-urlencoded
	app.use(bodyParser.urlencoded({
		extended: true
	}));

	// parse multipart/form-data
	app.use(multer());

	app.use(stylus.middleware({
		src: config.rootPath + '/public',
		compile: compile
	}));

	app.use(express.static(config.rootPath + '/public'));

	app.use(function(req, res, next) {
	    res.setHeader('Access-Control-Allow-Origin', '*');
	    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
	    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
	    next();
	});

};