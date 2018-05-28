'use strict';

const compression = require('compression');
const express = require('express');
const helmet = require('helmet')
const bodyParser = require('body-parser');
const log4js = require('log4js');
const mongoose = require('mongoose');
const path = require('path');
const config = require('../config/index')

const app = express();

var http = require('http');
var server = http.Server(app);


app.use(helmet());

// compress all responses
app.use(compression());

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', path.join(__dirname));

// set the static files location /public/img will be /img
app.use(express.static(path.join(__dirname, 'user')));


// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: false }));


// connect to database
mongoose.connect(config.mongoDbConfig);

// configure to use all types in different files.
log4js.configure({
    // specify the path where you want to the logs based on level
    appenders: [{
            type: 'file',
            filename: "../logs/error.log",
            category: 'error',
            maxLogSize: 204800,
            backups: 10
        },
        {
            type: "file",
            filename: "../logs/info.log",
            category: 'info',
            maxLogSize: 204800,
            backups: 10
        },
        {
            type: 'file',
            filename: "../logs/debug.log",
            category: 'debug',
            maxLogSize: 204800,
            backups: 10
        }
    ]
});



require('./user').init(app);

module.exports = server;