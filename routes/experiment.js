var express = require('express');
var router = express.Router();
var Account = require('../models/account');
var ExperimentService = require('../services/experiment');

router.get('/api/account/:id/experiments', function(req, res) {
	var acctId = req.params.id;
	var options = req.query;
	Account.findById(acctId, function(err,account){
		if(!err){
			ExperimentService.getExperiments(account,options,function(experiments,err){
				res.json({experiments:experiments});
			});
		}else{
			res.json({error:err});
		}
	});
});



module.exports = router;