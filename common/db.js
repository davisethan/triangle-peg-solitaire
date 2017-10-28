import mongodb from 'mongodb'

const MongoClient = mongodb.MongoClient
const connectionStr = 'mongodb://mongo:27017/tsn'

export const getMongo = (cb) => {
  MongoClient.connect(connectionStr, (err, db) => {
    cb(err, db)
  })
}
