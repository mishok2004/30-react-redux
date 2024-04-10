import { useDispatch, useSelector } from 'react-redux'
import {
  selectTitleFilter,
  selectAuthorFilter,
  selectYearFilter,
} from '../../redux/filters/model/selector/selectTitleFilter'
import {
  setTitleFilter,
  setAuthorFilter,
  setYearFilter,
  resetFilters,
} from '../../redux/filters/model/slices/filterSlice'

import './Filter.css'

const Filter = () => {
  const titleFilter = useSelector(selectTitleFilter)
  const authorFilter = useSelector(selectAuthorFilter)
  const yearFilter = useSelector(selectYearFilter)

  const dispatch = useDispatch()
  const handleTitleFilter = (e) => {
    dispatch(setTitleFilter(e))
  }
  const handleAuthorFilter = (e) => {
    dispatch(setAuthorFilter(e))
  }
  const handleYearFilter = (e) => {
    dispatch(setYearFilter(e))
  }

  const handlerResetFilters = () => {
    dispatch(resetFilters())
  }

  return (
    <div className="app-block filter">
      <div className="filter-row">
        <div className="filter-group">
          <input
            value={titleFilter}
            onChange={(e) => handleTitleFilter(e.target.value)}
            type="text"
            placeholder="Filter by title ..."
          ></input>
        </div>
        <div className="filter-group">
          <input
            value={authorFilter}
            onChange={(e) => handleAuthorFilter(e.target.value)}
            type="text"
            placeholder="Filter by author ..."
          ></input>
        </div>
        <div className="filter-group">
          <input
            value={yearFilter}
            onChange={(e) => handleYearFilter(e.target.value)}
            type="number"
            placeholder="Filter by year ..."
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
