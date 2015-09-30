var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Account = new Schema({
    apiToken: String,
    userId: String,
    optly_account_id:Number, 
    lastUpdatedDate: Date,
    name: String
});


module.exports = mongoose.model('Account', Account);