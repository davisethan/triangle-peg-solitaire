import mongodb from 'mongodb'

const MongoClient = mongodb.MongoClient
const connectionStr = 'mongodb://tsn-mongo-svc:8080/tsn'

export const getMongo = (cb) => {
  MongoClient.connect(connectionStr, (err, db) => {
    cb(err, db)
  })
}
