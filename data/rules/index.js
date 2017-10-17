import { getMongo } from '../../common/db'

const rules = {
  text: 'The game starts by removing a marble from the board. A valid move is to jump a marble over an adjacent marble into a groove two positions away and then to remove the jumped marble. When no valid moves can be made, the game is over. Count the remaining marbles on the board to find your score.',
  standards: [
    'One marble = You\'re a genius',
    'Two marbles = You\'re pretty smart',
    'Three marbles = You\'re just average',
    'Four marbles or more = Don\'t quit your day job'
  ]
}

getMongo((err, db) => {
  if (err) {
    console.log('Connection error. Exiting...')
    process.exit(1)
  }

  const rulesColl = db.collection('rules')
  const filter = {}

  rulesColl.deleteMany(filter, (err) => {
    if (err) {
      console.log('Cleaning error. Exiting...')
      process.exit(1)
    }

    rulesColl.insertOne(rules, (err) => {
      if (err) {
        console.log('Insertion error. Exiting...')
        process.exit(1)
      }

      db.close()
    })
  })
})
