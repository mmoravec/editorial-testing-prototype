var OptimizelyClient = require('optimizely-node-client');
var env = require('../config/' + process.env.NODE_ENV);


module.exports = {
	getResultsForExperiment: function (account,expId,cb){
		var oc = new OptimizelyClient(account.apiToken);
		oc.getStats(projectId)
		.then(function(goals){
			cb(goals);
		},function(err){
			cb(null,err);
		});
	}
};


