import { configureStore } from '@reduxjs/toolkit'
import { booksReducer } from './books/model/slices/booksSlice'
import { filterReducer } from './filters/model/slices/filterSlice'
import { errorReducer } from './error/model/slice/errorSlise'

const store = configureStore({
  reducer: {
    filter: filterReducer,
    books: booksReducer,
    error: errorReducer,
  },
})

export default store
