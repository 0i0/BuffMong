var DEBUG = process.env.NODE_ENV != 'production';

// Dependencies.
var express = require('express')
  , sessionStore = new express.session.MemoryStore()
  , app = express()
  , config = require('./config')(DEBUG)
  , mongoose = require('mongoose')

// Globals
var globals =
  { DEBUG : DEBUG
  , app : app
  , config : config
  , util : require('util')
  , mongoose : mongoose
  , db : mongoose.createConnection(config.mongo.url)
  , schema : {}
  , models : {}
  , request : require('request')
  }

globals.db.on('error', console.error.bind(console, 'connection error:'));
globals.db.once('open', function () {
  console.log('db connected')
});

app.configure(function(){
  app.set('views',__dirname + '/views')
  app.set('view engine', 'jade')
  app.set('view options', { layout: false })
  app.use(express.methodOverride())
  app.use(express.static(__dirname + '/client'))
  app.use(require('stylus').middleware({ src:'client' }))
  app.use(express.bodyParser());
  app.use(express.cookieParser())
  app.use(express.session({store: sessionStore, secret: config.sessionSecret}))
  app.use(app.router)
})

// Boot
require('./boot')(globals)

var listLength = 0
  , MAX_LIST = 24 * 60 // save 24 hours only

var getData = function(){
  globals.request.get(
  {uri: config.url
  }
  , function (err, response, content) {
      var time = new Date
      try{
        content = JSON.parse(content)
      }catch(e){
        console.log("bad JSON:")
        console.log(content)
        return
      }
      content.time = time.getTime()
      console.log('last update @: '+ time);
      var entry = new globals.models.Cache(content)
      console.log(entry)
      entry.save(function (err) {
        if (err) console.log(err)
        console.log(listLength)
      })
    }
  )
  setTimeout(getData,1000*60)
}//every minute
getData()

if (!module.parent) {
  var port = process.env.PORT || config.port
  //server.listen(port)
  app.listen(port)
  console.log('app running on port %d', port)
}