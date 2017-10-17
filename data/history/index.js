import { getMongo } from '../../common/db'

const history = {
  text: [
    'Triangle Solo Noble is a board game for one player involving movement of marbles on a board with grooves. The game is simply known as Solitaire in the United Kingdom where the card games are called Patience. It is also referred to as Brainvita, especially in India.',
    'The first evidence of the game can be tracked back to the court of Louis XIV, and the specific date of 1687, with an engraving made that year by Claude Auguste Berey of Anne de Rohan-Chabot, Princess of Soubise, with the puzzle by her side. The August 1687 edition of the French literary magazine Mercure galant contains a description of the board, rules, and sample problems. This is the first known reference to the game in print.',
    'The game fills the entire board except for one groove. The objective is, making valid moves, to empty the entire board except for a solitary marble.'
  ],
  photo: 'The princess of Soubise playing solitaire, 1687'
}

getMongo((err, db) => {
  if (err) {
    console.log('Connection error. Exiting...')
    process.exit(1)
  }

  const historyColl = db.collection('history')
  const filter = {}

  historyColl.deleteMany(filter, (err) => {
    if (err) {
      console.log('Cleaning error. Exiting...')
      process.exit(1)
    }

    historyColl.insertOne(history, (err) => {
      if (err) {
        console.log('Insertion error. Exiting...')
        process.exit(1)
      }

      db.close()
    })
  })
})
