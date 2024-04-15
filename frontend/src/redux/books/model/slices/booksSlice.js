import { createSlice } from '@reduxjs/toolkit'

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
})

export const { addBook, delBook, addFavorite } = booksSlice.actions

export const { reducer: booksReducer } = booksSlice
