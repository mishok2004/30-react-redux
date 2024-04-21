import { createSlice } from '@reduxjs/toolkit'

const initialState = ''

const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setError: (state, action) => (state = action.payload),
    clearError: () => initialState,
  },
})

export const { actions: errorActions } = errorSlice
export const { reducer: errorReducer } = errorSlice
