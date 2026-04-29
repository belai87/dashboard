import { FaSearch, FaTimes } from 'react-icons/fa'
import s from './SearchBarInput.module.scss'
import { SearchBarInputProps } from './types'

const SearchBarInput = ({
  searchTerm,
  setSearchTerm,
  resetFilters,
  hasActiveFilters,
}: SearchBarInputProps) => (
  <div className={s.root}>
    <div className={s.root__wrapper}>
      <FaSearch className={s.root__icon} />
      <input
        type="text"
        placeholder="Поиск пользователей..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {searchTerm && (
        <button className={s['clear-btn']} onClick={() => setSearchTerm('')}>
          <FaTimes />
        </button>
      )}
    </div>
    {hasActiveFilters && (
      <button className={s.root__clear} onClick={resetFilters}>
        Сбросить
      </button>
    )}
  </div>
)

export default SearchBarInput
