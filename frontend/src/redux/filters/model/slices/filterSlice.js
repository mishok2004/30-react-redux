import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  title: '',
  author: '',
  favorite: false,
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setTitleFilter: (state, action) => {
      state.title = action.payload
    },
    setAuthorFilter: (state, action) => {
      state.author = action.payload
    },
    setFavoriteFilter: (state) => {
      state.favorite = !state.favorite
    },
    resetFilters: (state) => initialState,
  },
})

export const {
  setTitleFilter,
  setAuthorFilter,
  setFavoriteFilter,
  resetFilters,
} = filterSlice.actions

export const { reducer: filterReducer } = filterSlice
