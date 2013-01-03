app.get('/squirt/:from/:to', function(req, res){
  var from = req.params.from
    , to = req.params.to
  from = parseInt(from)
  to = parseInt(to)
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Content-Type', 'application/json' );
  models.Cache.find({},function (err, cahce) {
      if (err) console.log(err)
      var filter = []
      for (var i = cahce.length - 1; i >= 0; i--) {
        if (cahce[i].time >= from && cahce[i].time <= to)
          filter.push(cahce[i])
      }
      res.write(JSON.stringify(filter))
      res.end();
  })
});

app.get('/squirt/', function(req, res){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Content-Type', 'application/json' );
  models.Cache.find({},function (err, cahce) {
      if (err) console.log(err)
      res.write(JSON.stringify(cahce))
      res.end();
  })
});

  