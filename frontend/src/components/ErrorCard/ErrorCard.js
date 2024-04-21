import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { selectError } from '../../redux/error/model/selector/selectError'
import { errorActions } from '../../redux/error/model/slice/errorSlise'

export const ErrorCard = () => {
  const errorMessage = useSelector(selectError)
  const dispatch = useDispatch()
  useEffect(() => {
    if (errorMessage) {
      toast.warning(errorMessage)
      dispatch(errorActions.clearError())
    }
  }, [errorMessage, dispatch])

  return <ToastContainer position="top-right" autoClose={2000} />
}
