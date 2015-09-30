var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({
    email: String,
    password: String,
    accounts: [{acctid:String,name:String}]
});

User.plugin(passportLocalMongoose,{
	usernameField: 'email',
	usernameLowerCase: true
});

module.exports = mongoose.model('User', User);