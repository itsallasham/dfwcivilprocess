
//get landing
module.exports.landing = function(req, res) {
	res.render('error', { 
  		title: 'DFW Civil Process',
  		error: {
  		status: "It looks like we may have taken a wrong turn at Albequrque..."
  		} 
  	});
}

module.exports.home = function(req,res) {
	res.render('index', {
		title: 'DFW Civil Process',
		message: "Welcome, we hope to provide you with any civil process or investigation services you require."
	});
}