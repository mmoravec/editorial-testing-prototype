var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user');

module.exports = {
  ensureAuthenticated: function (req, res, next) {
    if (req.isAuthenticated()){
      return next();
    }else{
      res.redirect('/login?error=not_logged_in');
    }
  }
};

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());