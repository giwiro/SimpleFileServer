var express = require('express');
var app = express();
var package = require('./package');

app.use(express.static(__dirname + '/public'));

app.listen(package.port || 80);