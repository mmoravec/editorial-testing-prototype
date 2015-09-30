var express = require('express');
var router = express.Router();
var Account = require('../models/account');
var AccountService = require('../services/account');
var User = require('../models/user');
var UserService = require('../services/user');

router.get('/api/user/:id/accounts', function(req, res) {
	var userId = req.params.id;
	User.findById(userId, function (err, user) {
	    if (!user || err) {
	        res.json({error:err});
	    }else{
	    	res.json({accounts:user.accounts});
	    }
	    
	});
	
});


module.exports = router;