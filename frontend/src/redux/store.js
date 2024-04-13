import { configureStore } from '@reduxjs/toolkit'
import { bookReducer } from './books/model/slices/bookSlice'
import { filterReducer } from './filters/model/slices/filterSlice'

const store = configureStore({
  reducer: {
    filter: filterReducer,
    books: bookReducer,
  },
})

export default store
