var app = require('express')()
var bodyParser = require('body-parser')
var jsx = require('express-react-views').createEngine()
var MongoClient = require('mongodb').MongoClient
var path = require('path')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jsx')
app.engine('jsx', jsx)

app.use(bodyParser.urlencoded({
  extended: false
}))

app.get('/', function(req, res) {
  var solution = req.query.solution

  res.render('index', {
    solution: solution
  })
})

app.post('/solution', function(req, res) {
  var body = req.body

  MongoClient.connect('mongodb://mongo:27017/tsn', function(err, db) {
    if (err) {
      process.exit(1)
    }

    var solutionsColl = db.collection('solutions')

    solutionsColl.findOne({
      index: body.solution
    }, function(err, result) {
      if (err) {
        process.exit(1)
      }

      if (result) {
        var solution = JSON.stringify(result.solution)

        res.redirect('/?solution=' + solution)
      } else {
        res.redirect('/')
      }

      db.close()
    })
  })
})

app.listen(8080, function () {
  console.log('localhost 8080 live...')
})
