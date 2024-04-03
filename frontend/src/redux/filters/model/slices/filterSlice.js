import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  title: '',
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setTitleFilter: (state, action) => {
      state.title = action.payload
    },
    resetFilters: (state) => initialState,
  },
})

export const { actions: filterActions, resetFilters } = filterSlice

export const { reducer: filterReducer } = filterSlice
