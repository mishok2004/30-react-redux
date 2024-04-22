import { createSlice } from '@reduxjs/toolkit'
import { fetchBook } from '../services/fetchBook'
import { createBookWithId } from '../../../../utils/createBookWithId'

const initialState = {
  books: [],
  isLoading: false,
}

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      return { ...state, books: [...state.books, action.payload] }
    },
    delBook: (state, action) => {
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload),
      }
    },
    addFavorite: (state, action) => {
      return {
        ...state,
        books: state.books.map((book) =>
          book.id === action.payload
            ? { ...book, isFavorite: !book.isFavorite }
            : book
        ),
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBook.pending, (state) => {
        return {
          ...state,
          isLoading: true,
        }
      })
      .addCase(fetchBook.fulfilled, (state, action) => {
        if (action.payload.title && action.payload.author) {
          return {
            ...state,
            books: [...state.books, createBookWithId(action.payload, 'by API')],
            isLoading: false,
          }
        } else {
          return {
            ...state,
            isLoading: false,
          }
        }
      })

      .addCase(fetchBook.rejected, (state) => {
        return {
          ...state,
          isLoading: false,
        }
      })
  },
})

export const { actions: booksActions } = booksSlice

export const { reducer: booksReducer } = booksSlice
