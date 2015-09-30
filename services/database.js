var OptimizelyClient = require('optimizely-node-client');
var Q = require("q");
var Project = require('../models/project');
var Account = require('../models/account');


module.exports = {
	saveUpdateResultsById: function(Model,results,cb){
		var tasks = [];
		for (var i=0; i < results.length; i++) {
			var query = {'id':results[i].id};
		  	tasks.push(Model.findOneAndUpdate(query, results[i], {upsert:true},function(err, doc){
			    if (err) return err
			    return doc
			}));
		}

		Q.all(tasks)
		  	.then(function(results) {
		    	cb(results);
		  	}, function (err) {
		    	console.log(err);
		  	});
	},
	getLocalData: function(Model,query,fields,cb){
		fields = fields || '';
		Model.find(query, fields, function (err, docs){
			cb(err,docs);
		});
	},
	normalizedResults: function(results){
		var normResults = [];
		if(results.length > 0){
			for(var x=0;x<results.length;x++){
				resultArray = results[x];
				for (var i = 0; i < resultArray.length; i++){
					var result = resultArray[i];
					normResults.push(result);
				}
			}
		}
		return normResults;
	}
};