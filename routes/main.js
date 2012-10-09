app.get('/', function(req, res){
	res.write('<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>')
	res.write("Hi, I'm Buffy. I'm too busy to talk.")
	res.end();
});