import { createSlice } from '@reduxjs/toolkit'
import { fetchBook } from '../services/fetchBook'
import { createBookWithId } from '../../../../utils/createBookWithId'

const initialState = []

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => [...state, action.payload],
    delBook: (state, action) =>
      state.filter((book) => book.id !== action.payload),
    addFavorite: (state, action) =>
      state.map((book) =>
        book.id === action.payload
          ? { ...book, isFavorite: !book.isFavorite }
          : book
      ),
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBook.fulfilled, (state, action) => {
      if (action.payload.title && action.payload.author) {
        return [...state, createBookWithId(action.payload, 'by API')]
      }
    })
  },
})

export const { actions: booksActions } = booksSlice

export const { reducer: booksReducer } = booksSlice
