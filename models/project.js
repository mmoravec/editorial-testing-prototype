var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Project = new Schema({
	code_revision: Number,
    socket_token: String,
    project_name: String,
    exclude_disabled_experiments: Boolean,
    ip_filter: String,
    ip_anonymization: Boolean,
    created: Date,
    project_status: String,
    enable_force_variation: Boolean,
    library: String,
    exclude_names: Boolean,
    last_modified: Date,
    project_javascript: String,
    include_jquery: Boolean,
    js_file_size: Number,
    id: Number,
    account_id: Number
});


module.exports = mongoose.model('Project', Project);