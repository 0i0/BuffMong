var vm = require('vm')
  , fs = require('fs')

module.exports = function(context){
  //Models
  console.log('Loading Models:')
  var dir = __dirname + '/models';
  fs.readdirSync(dir).forEach(function(file){
    var str = fs.readFileSync(dir + '/' + file, 'utf8')
    console.log('Model: ' + file)
    try{
      vm.runInNewContext(str, context, file);
    }catch(e){
      var exception = 'Faild loading:' + file
      console.log(e)
      throw exception
    }
  })

  //Routes
  console.log('Loading Routes:')
  dir = __dirname + '/routes'
  fs.readdirSync(dir).forEach(function(file){
    var str = fs.readFileSync(dir + '/' + file, 'utf8')
    console.log('Route: ' + file)
    try{
      vm.runInNewContext(str, context, file);
    }catch(e){
      var exception = 'Faild loading:' + file
      console.log(e)
      throw exception
    }
  })
}