import mongodb from 'mongodb'

const MongoClient = mongodb.MongoClient
const connectionStr = 'mongodb://localhost:27017/tsn'

export const getMongo = (cb) => {
  MongoClient.connect(connectionStr, (err, db) => {
    cb(err, db)
  })
}
