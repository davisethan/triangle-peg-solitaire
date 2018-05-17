var getMongo = require('../../common/db').getMongo
var addon = require('./build/Release/addon')

var host = process.env.HOST

var solutions = addon.main().map(function(solution, index) {
  return {
    index: index + 1,
    solution: solution
  }
})

getMongo(host, function(err, db) {
  if (err) {
    console.log('Connection error. Exiting...')
    process.exit(1)
  }

  var solutionsColl = db.collection('solutions')

  solutionsColl.createIndex({
    index: 1
  })

  var filter = {}

  solutionsColl.deleteMany(filter, function(err) {
    if (err) {
      console.log('Cleaning error. Exiting...')
      process.exit(1)
    }

    solutionsColl.insertMany(solutions, function(err) {
      if (err) {
        console.log('Insertion error. Exiting...')
        process.exit(1)
      }

      db.close()
    })
  })
})
