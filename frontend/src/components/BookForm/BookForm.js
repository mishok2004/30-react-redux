import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaSpinner } from 'react-icons/fa'
import { fetchBook } from '../../redux/books/model/services/fetchBook'
import booksDate from '../../data/books.json'
import { createBookWithId } from '../../utils/createBookWithId'
import { booksActions } from '../../redux/books/model/slices/booksSlice'
import { errorActions } from '../../redux/error/model/slice/errorSlise'
import { selectIsLoading } from '../../redux/books/model/selector/selectBooks'
import './BookForm.css'

const BookForm = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')

  const isLoading = useSelector(selectIsLoading)

  const dispatch = useDispatch()

  const handlAddRandomBook = () => {
    const randomIndex = Math.floor(Math.random() * booksDate.length)
    const randomBook = createBookWithId(booksDate[randomIndex], 'by Data base')
    dispatch(booksActions.addBook(randomBook))
  }

  const handlAddRandomBookByAPI = () => {
    dispatch(fetchBook('http://localhost:4000/random-book-delayed'))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (title && author) {
      const NewBook = createBookWithId({ title, author }, 'by Author')
      dispatch(booksActions.addBook(NewBook))

      setTitle('')
      setAuthor('')
    } else {
      dispatch(errorActions.setError('You must fill title and author'))
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
      </form>
      <button type="booton" onClick={handlAddRandomBook}>
        Add random book
      </button>
      <button
        type="booton"
        onClick={handlAddRandomBookByAPI}
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <span>Loading book...</span>
            <FaSpinner className="spinner" />
          </>
        ) : (
          'Add random book by API'
        )}
      </button>
    </div>
  )
}
export default BookForm
