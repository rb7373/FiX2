var path = require('path');
var rootPath = path.normalize(__dirname+'/../../');

module.exports = {
	development: {
		rootPath: rootPath,
		db: 'mongodb://localhost:27017/fixdb',
		port: process.env.PORT || 3030
	},
	production: {
		rootPath: rootPath,
		db: 'mongodb://admin:fixAdmin@ds063150.mongolab.com:63150/fixdb',
		port: process.env.PORT || 80
	}
};