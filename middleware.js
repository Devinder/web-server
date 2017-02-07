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

module.exports = middleware;