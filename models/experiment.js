var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Experiment = new Schema({
	display_goal_order_lst: Array,
    id: Number,
    audience_ids: Array,
    shareable_results_link: String,
    conditional_code: String,
    custom_js: String,
    primary_goal_id: Number,
    details: String,
    project_id: Number,
    variation_ids: Array,
    status: String,
    url_conditions:[{negate:Boolean,match_type:String,value:String}],
    description: String,
    last_modified: Date,
    is_multivariate: Boolean,
    activation_mode: String,
    custom_css: String,
    auto_allocated: Boolean,
    created: Date,
    percentage_included: Number,
    experiment_type:String,
    edit_url:String
});


module.exports = mongoose.model('Experiment', Experiment);