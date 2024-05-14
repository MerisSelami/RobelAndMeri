import express from 'express'
import sql from 'sqlite3'

const sqlite3 = sql.verbose()

const db = new sqlite3.Database(':memory:')

const app = express()
app.use(express.static('public'))
app.set('views', 'views')
app.set('view engine', 'pug')
app.use(express.urlencoded({ extended: false }))


app.get('/views', function (req, res) {
  console.log('/views')
  res.render('index')
})

app.get('/views2', function (req, res) {
  console.log('/views')
  res.render('index')
})

app.get('/robel', function (req, res) {
    console.log('GET called Robel')
    res.render('index')
})
// Start the web server
app.listen(3000, function () {
  console.log('Listening on port 3000...')
})