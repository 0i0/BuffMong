app.get('/beat/', function(req, res){
	console.log('beating @ ' + new Date)
	res.write("Beating");
	res.end();
});