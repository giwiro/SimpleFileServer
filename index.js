var express = require('express');
var app = express();

var port = process.env.PORT || 80;

app.get('/public/banner.jpg', function (req, res) {
  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  console.log('ip', ip);
  return res.status(200).send(' ');
})

app.use(express.static(__dirname + '/public'));



app.listen(port);
console.log("listening on port: " + port);