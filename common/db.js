var mongodb = require('mongodb')

var MongoClient = mongodb.MongoClient

exports.getMongo = function(host, cb) {
  var connectionStr = ''

  if (host) {
    if (host === 'localhost') {
      connectionStr = 'mongodb://' + host + ':27017/tsn'
    } else {
      console.log('Unrecognized host. Exiting...')
      process.exit(1)
    }
  } else {
    connectionStr = 'mongodb://mongo/tsn'
  }

  MongoClient.connect(connectionStr, function(err, db) {
    cb(err, db)
  })
}
