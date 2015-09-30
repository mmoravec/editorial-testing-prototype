var OptimizelyClient = require('optimizely-node-client');
var Q = require("q");
var Project = require('../models/project');
var Account = require('../models/account');
var dbService = require('./database');
var helper = require('../utils/helper');


module.exports = {
	getProjects: function(account,options,cb){
		var refreshData = options.refresh || false;
		if(refreshData){
			var oc = new OptimizelyClient(account.apiToken);
			oc.getProjects()
			.then(function(projects){
				if(projects.length > 0){
					if(!account.optly_account_id){
						updateOptlyAccountId(account,projects[0].account_id);
					}
					dbService.saveUpdateResultsById(Project,projects,function(results){
						cb(results);
					});
				}else{
					cb({error:'No projects in this account!'})
				}
			},function(err){
				cb(null,err);
			});
		}else{
			var fields = options.fields || '';
			var query = {'account_id':account.optly_account_id};
			dbService.getLocalData(Project,query,fields,function(err,results){
				if(!err){
					cb(results);
				}else{
					cb(err);
				}
			});
		}	
	},
	getProjectIds: function(account,query,cb){
		var options = query || {};
		var projectIds = helper.splitStringToArray(options.projectIds);
		if(projectIds.length == 0){
			// Get all project Ids for use
			var fields = 'id';
			var query = {'account_id':account.optly_account_id};
			dbService.getLocalData(Project,query,fields,function(err,results){
				for(var x=0;x<results.length;x++){
					projectIds.push(results[x].id);
				}
				cb(projectIds);
			});
		}else{
			cb(projectIds);
		}
	}
};


var updateOptlyAccountId = function(account,optly_account_id){
	account.optly_account_id = optly_account_id;
	account.save();
}