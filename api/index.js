const express = require('express')
const cors = require('cors')
const booksData = require('./data/books.json')

const app = express()

app.use(cors())

const getRandonBook = () => {
  const randomIndex = Math.floor(Math.random() * booksData.length)
  return booksData[randomIndex]
}

app.get('/random-book', (req, res) => res.json(getRandonBook()))

app.get('/random-book-delayed', (req, res) => {
  setTimeout(() => {
    res.json(getRandonBook())
  }, 2000)
})

const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
