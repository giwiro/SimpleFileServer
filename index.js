var express = require('express');
var app = express();
var package = require('./package');

var port = package.port || 80;

app.use(express.static(__dirname + '/public'));

app.listen(port);
console.log("listening on port: " + port);