import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchBook = createAsyncThunk('books/fetchBook', async () => {
  const res = await axios.get('http://localhost:4000/random-book')
  return res.data
})
