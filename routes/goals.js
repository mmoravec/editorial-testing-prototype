var express = require('express');
var router = express.Router();
var Account = require('../models/account');
var AccountService = require('../services/account');
var User = require('../models/user');
var UserService = require('../services/user');
var GoalService = require('../services/goals');


router.get('/api/account/:acctId/project/:id/goals', function(req, res) {
	var projectId = req.params.id;
	var acctId = req.params.acctId;
	Account.findById(acctId, function(err,account){
		if(!err){
			GoalService.getGoals(account,projectId,function(goals,err){
				res.json({goals:goals});
			});
		}else{
			res.json({error:err});
		}
	});
});

router.get('/api/account/:acctId/goal/:goalId/results', function(req, res) {
	var goalId = req.params.goalId;
	var acctId = req.params.acctId;
	Account.findById(acctId, function(err,account){
		if(!err){
			GoalService.getAllGoalResults(account,goalId,function(results,err){
				res.json({goalResults:results});
			});
		}else{
			res.json({error:err});
		}
	});
});


module.exports = router;


