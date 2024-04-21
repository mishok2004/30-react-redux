import { createSlice } from '@reduxjs/toolkit'

const initialState = ''

const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setError: (state, action) => action.payload,
    clearErrorBook: () => initialState,
  },
})

export const { actions: errorActions } = errorSlice
export const { reducer: errorReducer } = errorSlice
