import { useDispatch, useSelector } from 'react-redux'
import {
  selectTitleFilter,
  selectAuthorFilter,
  selectFavoriteFilter,
} from '../../redux/filters/model/selector/selectFilter'
import { filterActions } from '../../redux/filters/model/slices/filterSlice'

import './Filter.css'

const Filter = () => {
  const titleFilter = useSelector(selectTitleFilter)
  const authorFilter = useSelector(selectAuthorFilter)
  const favoriteFilter = useSelector(selectFavoriteFilter)

  const dispatch = useDispatch()
  const handleTitleFilter = (e) => {
    dispatch(filterActions.setTitleFilter(e))
  }
  const handleAuthorFilter = (e) => {
    dispatch(filterActions.setAuthorFilter(e))
  }

  const handleFavoriteFilter = () => {
    dispatch(filterActions.setFavoriteFilter())
  }

  const handlerResetFilters = () => {
    dispatch(filterActions.resetFilters())
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
          <label>
            <input
              type="checkbox"
              checked={favoriteFilter}
              onChange={handleFavoriteFilter}
            />
            Only favorite
          </label>
        </div>

        <button type="button" onClick={handlerResetFilters}>
          Reset filters
        </button>
      </div>
    </div>
  )
}
export default Filter
