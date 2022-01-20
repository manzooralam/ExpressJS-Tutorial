var express = require('express');  
var app = express();  
app.get('/', function (req, res) {  
   console.log("Got a GET request for the homepage");  
   res.send('Welcome to LSPointHub, Got a GET request for the homepage!');  
})  
app.post('/', function (req, res) {  
   console.log("Got a POST request for the homepage");  
   res.send('Welcome to LSPointHub, Got a POST request for the homepage!');  
})  
app.delete('/student_del', function (req, res) {  
   console.log("Got a DELETE request for /student-del");  
   res.send('Welcome to LSPointHub, Got a DELETE request for /student_del');  
})  
app.get('/student_reg', function (req, res) {  
   console.log("Got a GET request for /student_reg");  
   res.send('Welcome to LSPointHub, Got a GET request for /student_reg');  
})  
// This responds a GET request for lsph, lsxxph, lsxxxxxph, and so on  
app.get('/ls*ph', function(req, res) {     
   console.log("Got a GET request for /ls*ph");  
   res.send('Welcome to LSPointHub, pattern matched, Got a GET request for /ls*ph');  
})  
var server = app.listen(3000)
