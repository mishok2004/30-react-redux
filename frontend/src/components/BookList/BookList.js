import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import { delBook } from '../../redux/books/actionCreators'

import './BookList.css'

const BookList = () => {
  const books = useSelector((state) => state.books)

  const dispatch = useDispatch()
  const onDeleteBook = (id) => {
    console.log(id)
    dispatch(delBook(id))
  }

  return (
    <div className="app-block book-list">
      <h2>Book List</h2>
      {books.length === 0 ? (
        <p>No books</p>
      ) : (
        <ul>
          {books.map((book, index) => (
            <li key={book.id}>
              <div className="book-info">
                {++index}. {book.title} by <strong>{book.author}</strong>
              </div>
              <div className="book-action">
                <button onClick={() => onDeleteBook(book.id)}>
                  Delete Book
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
export default BookList
