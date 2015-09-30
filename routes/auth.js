var express = require('express');
var router = express.Router();
var _  = require('underscore');
var passport = require('passport');
var User = require('../models/user');
var authService = require('../services/auth');
var middleware = require('../utils/middleware');
var mailUtil = require('../utils/mail');
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);
var env = require('../config/' + process.env.NODE_ENV);


router.post('/register', function(req, res) {
	User.register(new User({ email : req.body.email }), req.body.password, function(err, user) {
	    if (err) {
	    	return res.json({error:'The user already exists'});
	    }

        res.json({user: user});
	});
});

router.get('/register', function(req, res) {
  middleware.respond(req, res);
});

router.get('/login', function(req, res) {
  	middleware.respond(req, res);
});

router.post('/login', function handleLocalAuthentication(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
        if (err) return next(err);
        if (!user) {
            return res.json(403, {
                login_status: "invalid",
                message: err.message
            });
        }

        // Manually establish the session...
        req.login(user, function(err) {
            if (err) return next(err);
            return res.json({
                login_status: 'success',
                redirect_url: env.domains.www,
                user:user
            });
        });

    })(req, res, next);
});

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/login');
});

router.get('/forgot', function(req, res) {
  middleware.respond(req, res);
});


router.post('/forgot', function(req, res) {
  	var email = req.body.email;
  	User.findByUsername(email, function (err, user) {
	    if (!user || err) {
	        return res.redirect('/forgot?error=nouser&email='+email);
	    }
	    user.forgot_pwd_verification = bcrypt.hashSync(Date.now().toString(), salt);
      	user.save(function(err){
      		if(err){
      			return res.redirect('/forgot?error=general');
      		}else{
		        res.render('emails/forgot-pwd',{user:user._doc, env:env},function(err,html){
		        	mailUtil.sendForgotPasswordMail(user._doc,'Optimizely Playground - Forgot Password',html,function(error,body){
		        		return res.redirect('/forgot?success=forgot_pwd');
		        	}); 
		        });
      		}
      	});
	});
});

router.get('/forgot_verify', function(req, res) {
	if(!req.query.error){
		var email = req.query.email;
		var token = req.query.token;
		User.findByUsername(email, function (err, user) {
		    if (!user || err) {
		        return res.redirect('/forgot_verify?error=nouser&email='+email);
		    }else if(user._doc.forgot_pwd_verification != token){
		    	return res.redirect('/forgot?error=badtoken');
		    }
		    middleware.respond(req, res);
		});
	}else{
		middleware.respond(req, res);
	}
	
});

router.get('/change_password', authService.ensureAuthenticated, function(req, res) {
	var email = req.query.email;
	User.findByUsername(email, function (err, user) {
	    if (!user || err) {
	        return res.redirect('/my-playground?error=nouser&email='+email);
	    }
	    user.forgot_pwd_verification = bcrypt.hashSync(Date.now().toString(), salt);
      	user.save(function(err){
      		if(err){
      			return res.redirect('/my-playground?error=general');
      		}else{
		        res.render('emails/change-pwd',{user:user._doc, env:env},function(err,html){
		        	mailUtil.sendForgotPasswordMail(user._doc,'Optimizely Playground - Change Password',html,function(error,body){
		        		return res.redirect('/my-playground?success=change_password');
		        	}); 
		        });
      		}
      	});
	});
});


router.post('/change_password', function(req, res) {
  	var email = req.body.email;
  	User.findByUsername(email, function (err, user) {
	    if (!user || err) {
	        return res.redirect('/forgot?error=nouser&email='+email);
	    }
	    user.setPassword(req.body.password,function(){
	    	user.save(function(err){
	      		if(err){
	      			return res.redirect('/forgot?error=general');
	      		}else{
			        return res.redirect('/login?success=changed_pwd');
	      		}
	      	});
	    })
	});
});


module.exports = router;