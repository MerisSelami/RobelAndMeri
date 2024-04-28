import express from 'express'
import sql from 'sqlite3'

const sqlite3 = sql.verbose()

// Create an in memory table to use
// const db = new sqlite3.Database('./db.db')
const db = new sqlite3.Database(':memory:')

const app = express()
app.use(express.static('public'))
app.set('views', 'views')
app.set('view engine', 'pug')
app.use(express.urlencoded({ extended: false }))

app.get('/index', function (req, res) {
  console.log('GET called')
  res.render('Meris')
})

app.get('/Meris', function (req, res) {
  console.log('GET called')
  res.render('index')
})

// Start the web server
app.listen(3000, function () {
  console.log('Listening on port 3000...')
})
