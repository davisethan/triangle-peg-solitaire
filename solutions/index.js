var addon = require('./build/Release/addon')
var MongoClient = require('mongodb').MongoClient

var solutions = addon.main()

MongoClient.connect('mongodb://mongo:27017/tsn', function(err, db) {
  if (err) {
    console.log('connect error', err)
    process.exit(1)
  }

  var solutionsColl = db.collection('solutions')

  solutionsColl.createIndex({
    index: 1
  })

  var indexed = solutions.map(function(solution, index) {
    return {
      index: index + 1 + '',
      solution: solution
    }
  })

  solutionsColl.insertMany(indexed, function(err) {
    if (err) {
      console.log('insert error', err)
      process.exit(1)
    }

    db.close()
  })
})
