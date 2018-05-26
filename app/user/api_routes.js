const bodyParser = require("body-parser");
const log4js = require('log4js');

function initUser(app) {

    app.use(bodyParser.json());

    app.get('/api/user/testAPI', testFunction)

}

function testFunction(req, res) {
    console.log("Function Called")
    return res.json({
        status: 'ok',
        message: 'Function Called'
    });
}

module.exports = initUser