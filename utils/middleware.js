var _  = require('underscore'),
    _s = require('underscore.string'),
    env = require('../config/' + process.env.NODE_ENV),
    messages = require('../config/messages'),
    routeConfig = require('../config/route-config');

module.exports = {
	respond: function (req,res,data,isJSON) {
    var localData = {};

    // Add passed in data
    _.extend(localData, data);

    var path = req.path;
    req.config = routeConfig[path];

    // Clean up user data
    if(req.user){
      delete req.user['salt'];
      delete req.user['hash'];
      delete req.user['__v'];
      _.extend(localData,{user:req.user});
    }

    // Add config to the local data
    if(req.config){
      _.extend(req.config,{environment: process.env.NODE_ENV });
      // _.extend(req.config,{assets:env.services.s3.assets});
      _.extend(localData,{config:req.config});

    } 

    // Add any query params to the local
    if(req.query){
      _.extend(localData,{query:req.query});
    }

    // ADd all domains
    _.extend(localData,{domains:env.domains});

    // Add Any Errors
    if(!!!localData.message){
      _.extend(localData, {message: this.buildMessages(req)});
    }
    
    // Add the current URL
    _.extend(localData,{url:req._parsedUrl});
		if(req.query && _.has(req.query, 'json') && process.env.NODE_ENV != 'production'){
      delete req.query['json'];
      res.json(localData);
    }else{
      if (_.isUndefined(localData.config.template)){
        res.send("You need a template for: " + req.path);
      }else{
        res.render(localData.config.template, localData);
      }
    }
	},
  buildMessages: function (req){
    var message = {};
    if(!!req.query.error && !!messages.error[req.query.error]){
      message.error = messages.error[req.query.error];
    }

    if(!!req.query.success && !!messages.success[req.query.success]){
      message.success = messages.success[req.query.success];
    }

    return message;
  }
}