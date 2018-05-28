const bodyParser = require("body-parser");
const log4js = require('log4js');

function initUser(app) {

    app.use(bodyParser.json());

}

module.exports = initUser