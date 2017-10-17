import { getMongo } from '../../common/db'
import addon from './build/Release/addon'

const solutions = addon.main().map((solution, index) => {
  return {
    index: index + 1,
    solution: solution
  }
})

getMongo((err, db) => {
  if (err) {
    console.log('Connection error. Exiting...')
    process.exit(1)
  }

  const solutionsColl = db.collection('solutions')

  solutionsColl.createIndex({
    index: 1
  })

  const filter = {}

  solutionsColl.deleteMany(filter, (err) => {
    if (err) {
      console.log('Cleaning error. Exiting...')
      process.exit(1)
    }

    solutionsColl.insertMany(solutions, (err) => {
      if (err) {
        console.log('Insertion error. Exiting...')
        process.exit(1)
      }

      db.close()
    })
  })
})
