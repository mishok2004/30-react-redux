import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import booksDate from '../../data/books.json'
import { addBook } from '../../redux/books/actionCreators'
import './BookForm.css'

const BookForm = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const dispatch = useDispatch()

  const handlAddRandomBook = () => {
    const randomIndex = Math.floor(Math.random() * booksDate.length)
    const randomBook = { ...booksDate[randomIndex], id: uuidv4() }

    dispatch(addBook(randomBook))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (title && author) {
      const book = {
        title,
        author,
        id: uuidv4(),
      }
      dispatch(addBook(book))

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
      </form>
    </div>
  )
}
export default BookForm
