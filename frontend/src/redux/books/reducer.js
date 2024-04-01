import * as a from './actionTypes'

const initialState = []

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case a.ADD_BOOK:
      return [...state, action.payload]
    case a.DEL_BOOK:
      return state.filter((book) => book.id !== action.payload)
    case a.TOGLE_FAVORITE:
      return state.map((book) =>
        book.id === action.payload
          ? { ...book, isFavorite: !book.isFavorite }
          : book
      )

    default:
      return state
  }
}

export default bookReducer
