import { v4 as uuidv4 } from 'uuid'

export const createBookWithId = (book, sorse) => {
  return {
    ...book,
    sorse,
    id: uuidv4(),
    isFavorite: false,
  }
}
