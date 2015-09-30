var OptimizelyClient = require('optimizely-node-client');
var env = require('../config/' + process.env.NODE_ENV);
var Q = require("q");
var Experiment = require('../models/experiment');
var Project = require('../models/experiment');
var ProjectService = require('../services/project');
var async = require("async");
var dbService = require('./database');
var mongoose = require('mongoose');


module.exports = {
	getExperiments: function(account,options,cb){
		var refreshData = options.refresh || false;
		var oc = new OptimizelyClient(account.apiToken);
		ProjectService.getProjectIds(account,options,function(projectIds){
			if(refreshData){
				async.map(projectIds,function(projectId,callback){
					oc.getExperiments(projectId)
					.then(function(data){
						callback(null,data); 
					}).error(function (e) {
					    callback({error: e.message});
					});
				},function(err, experiments){
					var normalizedResults = dbService.normalizedResults(experiments);
					dbService.saveUpdateResultsById(Experiment,normalizedResults,function(results){
						cb(results);
					});
				});
			}else{
				var fields = options.fields || '';
				var orCondition = [];
				for (var i = 0; i < projectIds.length; i++){
					orCondition.push({project_id:projectIds[i]});
				}
				var query = {
					$or: orCondition
				};

				dbService.getLocalData(Experiment,query,fields,function(err,results){
					if(!err){
						cb(results);
					}else{
						cb(err);
					}
				});
			}
		});
	}
};

