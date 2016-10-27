var addon = require('./build/Release/addon')
var debug = require('debug')('mongojs')
var fs = require('fs')
var mongojs = require('mongojs')
var async = require('async')

var db = mongojs('mongodb://localhost:27017/tsn', ['solutions'])

db.solutions.createIndex({
  index: 1
}, {
  unique: true
}, function(err) {
  console.log('Error -:', JSON.stringify(err, null, 2))
  console.log('Date -:', new Date())

  process.exit(1)
})

console.log('Finding solutions -:', new Date())

var solutions = addon.main()

console.log('Solutions found -:', new Date())

async.eachOfLimit(solutions, 1024, function(solution, index, cb) {
  db.solutions.insert({
    index: index,
    solution: solution
  }, function(err) {
    if (err)
      return cb(err)

    if (0 === index % 100)
      console.log(['Solution', index, 'saved -:'].join(' '), new Date())
  })
}, function(error) {
  if (error) {
    console.log('Error -:', JSON.stringify(error, null, 2))
    console.log('Date -:', new Date())

    process.exit(1)
  }

  console.log('Solutions save -:', new Date())

  process.exit(0)
})
