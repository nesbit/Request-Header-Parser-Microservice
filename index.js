//includes necesarry classes to use for this project
var express = require('express')
var app = express()
//Same port that is used in the .env file
var port = process.env.PORT || 8080;
// Get query from URL and eventally push it to page
app.get('/', function(req, res) {
    var ip = req.headers['x-forwarded-for'] || 
        req.connection.remoteAddress || 
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress;
    var language = req.headers["accept-language"].split(",")[0];
    var system = req.headers['user-agent'].split(') ')[0].split(' (')[1];
    var infotoPost = {
        "ipaddress" : ip,
        "language": language,
        "software": system
    };
    res.send(infotoPost)
});
    app.listen(port)
