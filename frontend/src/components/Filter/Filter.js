import { useDispatch, useSelector } from 'react-redux'
import { selectFilterText } from '../../redux/filters/model/selector/filterSelector'
import { setTitleFilter } from '../../redux/filters/model/slices/filterSlice'

import './Filter.css'

const Filter = () => {
  const titleFilter = useSelector(selectFilterText)

  const dispatch = useDispatch()
  const handleTitleFilter = (e) => {
    dispatch(setTitleFilter(e))
  }
  return (
    <div className="app-block filter">
      <div className="filter-grouo">
        <input
          value={titleFilter}
          onChange={(e) => handleTitleFilter(e.target.value)}
          type="text"
          placeholder="Filter by title ..."
        ></input>
      </div>
    </div>
  )
}
export default Filter
