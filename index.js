var express = require('express');    
var app = express();    
app.get('/', function (req, res) {    
  res.send('Welcome to LSPointHub!');    
});    
var server = app.listen(8000, function () {    
  var host = server.address().address;    
  var port = server.address().port;    
  console.log('Example app listening at http:// host name:  %s  :Port name%s', host, port);    
});   