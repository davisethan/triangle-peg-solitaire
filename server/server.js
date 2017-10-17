import express from 'express'
import bodyParser from 'body-parser'

import { getMongo } from '../common/db'

const app = express()
const port = process.env.API_PORT || 3030

getMongo((err, db) => {
  if (err) {
    console.log('Connection error. Exiting...')
    process.exit(1)
  }

  const historyColl = db.collection('history')
  const solutionsColl = db.collection('solutions')
  const rulesColl = db.collection('rules')

  app.use(bodyParser.json())
  app.use((req, res, next) => {
    const webServerUrl = 'http://localhost:3000'

    res.header('Access-Control-Allow-Origin', webServerUrl)
    res.header('Access-Control-Allow-Headers', 'Content-Type')
    next()
  })

  app.get('/history', (req, res) => {
    const query = {}

    historyColl.findOne(query, (err, doc) => {
      if (err) {
        console.log('Read error. Exiting...')
        process.exit(1)
      }

      res.json(doc)
    })
  })

  app.post('/solution', (req, res) => {
    const index = Number(req.body.index)
    const query = {
      index: index
    }

    solutionsColl.findOne(query, (err, doc) => {
      if (err) {
        console.log('Read error. Exiting...')
        process.exit(1)
      }

      const solution = doc.solution

      res.json(solution)
    })
  })

  app.get('/rules', (req, res) => {
    const query = {}

    rulesColl.findOne(query, (err, doc) => {
      if (err) {
        console.log('Read error. Exiting...')
        process.exit(1)
      }

      res.json(doc)
    })
  })

  app.listen(port, () => {
    console.log('Application server live...')
  })
})
