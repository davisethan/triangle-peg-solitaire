import express from 'express'
import bodyParser from 'body-parser'
import fs from 'fs'

import { getMongo } from '../common/db'

const app = express()
const port = 3030

getMongo((err, db) => {
  if (err) {
    console.log('Database connection error. Exiting...')
    process.exit(1)
  }

  const historyColl = db.collection('history')
  const solutionsColl = db.collection('solutions')
  const rulesColl = db.collection('rules')

  app.use(bodyParser.json())
  app.use((req, res, next) => {
    const protocol = req.protocol
    const host = req.get('host')
    const frontendUrl = `${protocol}://${host}`

    res.header('Access-Control-Allow-Origin', frontendUrl)
    res.header('Access-Control-Allow-Headers', 'Content-Type, Accept')
    next()
  })

  app.get('/history', (req, res) => {
    fs.readFile('./data/history.json', 'utf8', (err, content) => {
      if (err) {
        console.log('File system read error. Exiting...')
        process.exit(1)
      }

      const history = JSON.parse(content)

      res.json(history)
    })
  })

  app.post('/solution', (req, res) => {
    const index = Number(req.body.index)
    const query = {
      index: index
    }

    solutionsColl.findOne(query, (err, doc) => {
      if (err) {
        console.log('Database read error. Exiting...')
        process.exit(1)
      }

      const solution = doc.solution

      res.json(solution)
    })
  })

  app.get('/rules', (req, res) => {
    fs.readFile('./data/rules.json', 'utf8', (err, content) => {
      if (err) {
        console.log('File system read error. Exiting...')
        process.exit(1)
      }

      const rules = JSON.parse(content)

      res.json(rules)
    })
  })

  app.listen(port, () => {
    console.log('Application server live...')
  })
})
