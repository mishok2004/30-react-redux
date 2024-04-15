import { configureStore } from '@reduxjs/toolkit'
import { booksReducer } from './books/model/slices/booksSlice'
import { filterReducer } from './filters/model/slices/filterSlice'

const store = configureStore({
  reducer: {
    filter: filterReducer,
    books: booksReducer,
  },
})

export default store
