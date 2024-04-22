import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { errorActions } from '../../../error/model/slice/errorSlise'

export const fetchBook = createAsyncThunk(
  'books/fetchBook',
  async (url, thunkAPI) => {
    try {
      const res = await axios.get(url)
      return res.data
    } catch (error) {
      thunkAPI.dispatch(errorActions.setError(error.message))
      return thunkAPI.rejectWithValue(error)
    }
  }
)
