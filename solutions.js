var addon = require('./build/Release/addon')
var MongoClient = require('mongodb').MongoClient

var solutions = addon.main()

MongoClient.connect('mongodb://localhost:27017/tsn', function(err, db) {
  if (err) {
    process.exit(1)
  }

  var solutionsColl = db.collection('solutions')
  var indexed = solutions.map(function(solution, index) {
    return {
      index: index + 1,
      solution: solution
    }
  })

  solutionsColl.insertMany(indexed, function(err) {
    if (err) {
      process.exit(1)
    }

    db.close()
  })
})
