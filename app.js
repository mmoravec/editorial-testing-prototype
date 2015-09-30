var path = require('path');
var express = require('express');
var session = require('express-session');
var http = require('http');
var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var React = require('react');
var bodyParser = require('body-parser');
var swig = require('swig');
var env = require('./config/' + process.env.NODE_ENV);

var routes = require('./routes/index');
var authRoutes = require('./routes/auth');
var accountRoutes = require('./routes/account');
var userRoutes = require('./routes/user');
var goalsRoutes = require('./routes/goals');
var experimentRoutes = require('./routes/experiment');

var app = express();

// view engine setup
app.engine('swig', swig.renderFile);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'swig');
app.set('view cache', false);
swig.setDefaults({ cache: false });

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser('123Siki34D'));
app.use(session({secret: 'dRsdf#1!sw', saveUninitialized: true, resave: true}));
app.use(passport.initialize());
app.use(passport.session());
if(process.env.NODE_ENV == 'local'){
    app.use(express.static(path.join(__dirname, 'assets')));
}else{
    app.use(express.static(path.join(__dirname, 'public')));
}



// mongoose
var mongoConfig = env.services.mongo;
mongoose.connect('mongodb://'+
    mongoConfig.USER+':'+
    mongoConfig.PASSWORD+'@'+
    mongoConfig.DOMAIN+':'+
    mongoConfig.PORT+'/'+
    mongoConfig.DB);



app.use('/', routes);
app.use('/', authRoutes);
app.use('/', accountRoutes);
app.use('/', userRoutes);
app.use('/', goalsRoutes);
app.use('/', experimentRoutes);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;
