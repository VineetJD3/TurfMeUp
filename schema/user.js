'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var user_schema = new Schema({
    first_namme: String,
    last_name: String,
    email: String
})

module.exports = mongoose.model('users', user_schema)