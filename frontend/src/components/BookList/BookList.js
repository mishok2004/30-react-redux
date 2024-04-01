import { useSelector, useDispatch } from 'react-redux'
import { BsBookmarkStarFill, BsBookmarkStar } from 'react-icons/bs'

import { delBook, addFavorite } from '../../redux/books/actionCreators'

import './BookList.css'

const BookList = () => {
  const books = useSelector((state) => state.books)

  const dispatch = useDispatch()
  const onDeleteBook = (id) => {
    dispatch(delBook(id))
  }

  const onTogleFavoriteBook = (id) => {
    dispatch(addFavorite(id))
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
                <span onClick={() => onTogleFavoriteBook(book.id)}>
                  {book.isFavorite ? (
                    <BsBookmarkStarFill className="star-icon" />
                  ) : (
                    <BsBookmarkStar className="star-icon" />
                  )}
                </span>
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
