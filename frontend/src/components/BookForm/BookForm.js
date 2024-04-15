import { useState } from 'react'
import { useDispatch } from 'react-redux'
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
    const randomBook = createBookWithId(booksDate[randomIndex])
    dispatch(booksActions.addBook(randomBook))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (title && author) {
      const NewBook = createBookWithId({ title, author })
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
      </form>
    </div>
  )
}
export default BookForm
