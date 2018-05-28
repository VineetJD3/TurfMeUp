'use strict'

var mongoose = require('mongoose');
var user = require('./user')

var config = require('config')
var dbConfig = config.get('dbConfig')
var db = mongoose.createConnection('mongodb://' + dbConfig.url + ":" + dbConfig.port + "/" + dbConfig.database)

db.on('connected', function(){
    console.log('MongoDB Connected')
})

module.exports = {
    users: db.model('users', user)
}