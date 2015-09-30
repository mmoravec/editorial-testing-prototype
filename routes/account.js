var express = require('express');
var router = express.Router();
var Account = require('../models/account');
var AccountService = require('../services/account');
var User = require('../models/user');
var UserService = require('../services/user');
var ProjectService = require('../services/project');

router.post('/api/account', function(req, res) {
	var account = new Account();
	account.apiToken = req.body.apiToken || '';
	account.name = req.body.name || '';
	account.userId = req.body.userId || '';
	account.save(function(err){
		if(!err){
			UserService.addAccount(account,function(account,err){
				if(!err){
					res.json({success:true,account:account});
				}else{
					res.json({error:err});
				}
				
			});
		}else{
			res.json({error:err});
		}
	});
});

router.get('/api/account/:id/projects', function(req, res) {
	var acctId = req.params.id;
	var options = req.query || {};
	Account.findById(acctId, function(err,account){
		if(!err){
			ProjectService.getProjects(account,options,function(projects,err){
				res.json({projects:projects});
			});
		}else{
			res.json({error:err});
		}
	});
});



module.exports = router;