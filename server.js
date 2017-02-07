/*
Steps to user express -
1) requie express (var express = require(express);)
2) call fun. express and store in a reference (var app = express();)
3) call url using  app.get (app.get('/', function(req, res){ res.send();}))

for big domain

app.use(express.static(__dirname + '/public'));

4) start server (app.listen(port))




*/

var express = require('express');

var app = express();
var PORT = 3000;

var middleware = {
	requireAuthentication: function(req, res, next){
		console.log('Private route hit');
		next();
	},
	logger: function(req, res, next){
		var dte = new Date().toString();
		console.log("Request on - " + dte + " is : ");
		next();
	}
};



app.get('/', function(req, res){
	res.send('Hi Expresso');
});

app.use(middleware.logger);
app.get('/help', function(req, res){
	res.send('Hi Expresso help');
});

//app.use(express.static(__dirname + '/public'));

app.listen(PORT, function(){
	console.log('Express server started on '+ PORT);
});