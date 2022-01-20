var express = require('express');  
var app = express();  
app.use(function(req, res, next) {  
  console.log('Method:  %s , URL:    %s', req.method, req.url);  
  next();   
});  
app.get('/', function(req, res, next) {  
  res.send('Welcome to LSPointHub!');  
});  
app.get('/help', function(req, res, next) {  
  res.send('How can I help you?');  
});  
var server = app.listen(8000) 