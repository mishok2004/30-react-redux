import { useDispatch, useSelector } from 'react-redux'
import { selectTitleFilter } from '../../redux/filters/model/selector/selectTitleFilter'
import { filterActions } from '../../redux/filters/model/slices/filterSlice'

import './Filter.css'

const Filter = () => {
  const titleFilter = useSelector(selectTitleFilter)

  const dispatch = useDispatch()
  const handleTitleFilter = (e) => {
    dispatch(filterActions.setTitleFilter(e))
  }

  const handlerResetFilters = () => {
    dispatch(filterActions.resetFilters())
  }

  return (
    <div className="app-block filter">
      <div className="filter=row">
        <div className="filter-grouo">
          <input
            value={titleFilter}
            onChange={(e) => handleTitleFilter(e.target.value)}
            type="text"
            placeholder="Filter by title ..."
          ></input>
        </div>
        <button type="button" onClick={handlerResetFilters}>
          Reset filters
        </button>
      </div>
    </div>
  )
}
export default Filter
