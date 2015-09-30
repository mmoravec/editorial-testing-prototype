var env = require('../config/' + process.env.NODE_ENV),
  Mailgun = require('mailgun-js'),
  api_key = env.services.mailgun.MAILGUN_API_KEY,
  domain = env.services.mailgun.MAILGUN_DOMAIN,
  _ = require('underscore'),
  mailgun = new Mailgun({apiKey: api_key, domain: domain});

module.exports = {
  sendRegisterMail: function(user,html,cb){
    var data = {
      from: env.services.mailgun.MAILGUN_FROM_ADDRESS,
      to: user.email,
      subject: 'Optimizely Playground - Welcome!',
      html:html
    };

    return mailgun.messages().send(data, function (error, body) {
      cb(error,body);
    });
  },

  sendForgotPasswordMail: function(user,subject,html,cb){
    var data = {
      from: env.services.mailgun.MAILGUN_FROM_ADDRESS,
      to: user.email,
      subject: subject,
      html: html
    };

    return mailgun.messages().send(data, function (error, body) {
      cb(error,body);
    });
  }
}