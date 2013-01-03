app.get('/set/grab/:milisec', function(req, res){
	var time = parseInt(req.params.milisec);
	clearTimeout(timers.grab);
	config.grabbinTime = time;
	timers.grabFunction();
	res.write("Grab time has changed to :" + time)
  res.end();
});
app.get('/set/beat/:milisec', function(req, res){
	var time = parseInt(req.params.milisec);
	clearTimeout(timers.beat);
	config.beatinTime = time;
	timers.beatFunction();
	res.write("Beat time has changed to :" + time)
  res.end();
});

