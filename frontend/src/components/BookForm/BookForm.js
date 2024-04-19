import { useState } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import booksDate from '../../data/books.json'
import { createBookWithId } from '../../utils/createBookWithId'
import { booksActions } from '../../redux/books/model/slices/booksSlice'
import './BookForm.css'

const BookForm = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const dispatch = useDispatch()

  const handlAddRandomBook = () => {
    const randomIndex = Math.floor(Math.random() * booksDate.length)
    const randomBook = createBookWithId(booksDate[randomIndex], 'by Data base')
    dispatch(booksActions.addBook(randomBook))
  }

  const handlAddRandomBookByAPI = async () => {
    try {
      const res = await axios.get('http://localhost:4000/random-book')
      if (res.data && res.data.title && res.data.author) {
        const NewBook = createBookWithId(res.data, 'by API')
        dispatch(booksActions.addBook(NewBook))
      }
    } catch (error) {
      console.log('Error by server', error)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (title && author) {
      const NewBook = createBookWithId({ title, author }, 'by Author')
      dispatch(booksActions.addBook(NewBook))

      setTitle('')
      setAuthor('')
    }
  }

  return (
    <div className="app-block book-form">
      <h2>Add a new Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <button type="submit">Add book</button>
        <button type="booton" onClick={handlAddRandomBook}>
          Add random book
        </button>
        <button type="booton" onClick={handlAddRandomBookByAPI}>
          Add random book by API
        </button>
      </form>
    </div>
  )
}
export default BookForm
