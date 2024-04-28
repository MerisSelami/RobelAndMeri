import express from 'express'
import sql from 'sqlite3'

const sqlite3 = sql.verbose()

const db = new sqlite3.Database(':memory:')

const app = express()
app.use(express.static('public'))
app.set('views', 'views')
app.set('view engine', 'pug')
app.use(express.urlencoded({ extended: false }))

app.get('/index')
app.get('/MerisViews', function (req, res) {
  console.log('GET called')
  res.render('Meris')
})

app.get('/MerisViews', function (req, res) {
  console.log('GET called')
  res.render('index')
})

// Start the web server
app.listen(3000, function () {
  console.log('Listening on port 3000...')
})


app.post('/', function (req,res){
    console.log('adding todo item')
    const stmt = db.prepare('INSERT INTO todo (task) VALUES (?)')
    stmt.run(req.body.task)
    stmt.finalize()
  })

  db.run(`CREATE TABLE todo (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    task TEXT NOT NULL)`)
  