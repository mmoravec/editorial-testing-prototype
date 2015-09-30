var OptimizelyClient = require('optimizely-node-client');
var env = require('../config/' + process.env.NODE_ENV);
var Q = require("q");


module.exports = {
	getProjects: function(account,cb){
		var oc = new OptimizelyClient(account.apiToken);
		oc.getProjects()
		.then(function(projects){
			cb(projects);
		},function(err){
			cb(null,err);
		});
	}
};