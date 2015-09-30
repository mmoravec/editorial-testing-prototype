var OptimizelyClient = require('optimizely-node-client');
var env = require('../config/' + process.env.NODE_ENV);
var Q = require("q");
var async = require("async");


module.exports = {
	getGoals: function(account,projectId,cb){
		var oc = new OptimizelyClient(account.apiToken);
		oc.getGoals(projectId)
		.then(function(goals){
			cb(goals);
		},function(err){
			cb(null,err);
		});
	},
	getAllGoalResults: function(account,goalId,cb){
		var oc = new OptimizelyClient(account.apiToken);
		var expIds = [];
		oc.getGoal(goalId)
		.then(function(goal){
			expIds = goal.experiment_ids;
			async.map(goal.experiment_ids, 
					function(expId,callback){
    					oc.getStats(expId)
    					.then(function(data){
    						callback(null,data); 
    					}).error(function (e) {
						    console.error("old experiment ", e.message);
						});
					}, function(err, results){
						if(results !== null && results.length > 0){
							cb(this.filterGoalResults(results,goalId,expIds));
						}
					});
		});
	}
};

filterGoalResults = function(allResults,goalId,expIds){
	var allExperimentGoalResults = [];
	for(var x=0;x<allResults.length;x++){
		var results = allResults[x];
		var filteredGoalResults = [];
		var experiment = {};
		experiment.experiment_id = expIds[x];
		for (var y = 0; y < results.length; y++){
			var result = results[y];
			if(result.goal_id == goalId){
				filteredGoalResults.push(result);
			}
		}
		experiment.results = filteredGoalResults;
		allExperimentGoalResults.push(experiment);	
	}
	return allExperimentGoalResults;
}