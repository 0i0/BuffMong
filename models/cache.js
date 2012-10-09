schema.pair = new mongoose.Schema(
  {"pair":"String"
  ,"buy":"String"
  ,"avgBuy":"String"
  ,"avgSell":"String"
  })


schema.cache = new mongoose.Schema({
  "pairs" : []
  ,"time" : "Number"
})

models.Cache = db.model('Cache', schema.cache)
