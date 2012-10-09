module.exports = function Config(debug) {
  var config =
    { dev :
      { orign : 'http://0.0.0.0:5000'
      , port :5000
      , sessionSecret : '50m35ecr3t'
      , mongo :
        {url : 'mongodb://localhost/my_database'
        }
      , google :
        { analyticsAccount : ''
        }
      , url : 'http://dws1.etoro.com/ApplicationWidgets/TradesMonitor/Handlers/GetTop10Pairs.ashx?filter=0'
      }
    , prod :
      { orign : 'http://SOMEAPP.herokuapp.com'
      , port : process.env.PORT
      , sessionSecret : '50m35ecr3t'
      , mongo :
        {url : process.env.MONGOHQ_URL
        }
      , google :
        { analyticsAccount : ''
        }
      , url : 'http://dws1.etoro.com/ApplicationWidgets/TradesMonitor/Handlers/GetTop10Pairs.ashx?filter=0'
      }
    }
  return config[(debug)?'dev':'prod']
}