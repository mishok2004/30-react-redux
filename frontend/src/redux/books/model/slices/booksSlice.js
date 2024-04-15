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

export const { actions: booksActions } = booksSlice

export const { reducer: booksReducer } = booksSlice
