import { useDispatch } from 'react-redux'
import axios from 'axios'
import { createBookWithId } from '../../../../utils/createBookWithId'
import { booksActions } from '../slices/booksSlice'

export const randomBook = async (dispatch, getState) => {
  //   const dispatch = useDispatch()

  try {
    const res = await axios.get('http://localhost:4000/random-book')
    if (res.data && res.data.title && res.data.author) {
      const NewBook = createBookWithId(res.data, 'by API')
      dispatch(booksActions.addBook(NewBook))
    }
  } catch (error) {
    console.log('Error by server', error)
  }
}
