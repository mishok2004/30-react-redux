import * as a from './actionTypes'

export const addBook = (newBook) => {
  return {
    type: a.ADD_BOOK,
    payload: newBook,
  }
}

export const delBook = (id) => {
  return {
    type: a.DEL_BOOK,
    payload: id,
  }
}

export const addFavorite = (id) => {
  return {
    type: a.TOGLE_FAVORITE,
    payload: id,
  }
}
