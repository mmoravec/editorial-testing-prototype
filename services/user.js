var User = require('../models/user');


module.exports = {
	addAccount: function(account,cb){
		User.findById(account.userId, function (err, user) {
		    if (!user || err) {
		        cb(null,err);
		    }
		    user.accounts.push({acctid:account._id,name:account.name});
		    user.save(function(err){
	      		if(err){
	      			cb(null,err);
	      		}else{
			        cb(user);
	      		}
	      	});
		});
	}
};