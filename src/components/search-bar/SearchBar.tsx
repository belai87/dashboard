'use client'

import useUserStore from '@/src/store'
import s from './SearchBar.module.scss'
import SearchBarInput from '@/src/components/search-bar/components/input'
import Tabs from '@/src/components/search-bar/components/tabs'
import {
  FaCrown,
  FaLayerGroup,
  FaMars,
  FaUsers,
  FaUserShield,
  FaVenus,
} from 'react-icons/fa'

const roles = [
  { id: 'all', label: 'Все', icon: <FaLayerGroup /> },
  { id: 'admin', label: 'Админы', icon: <FaCrown /> },
  { id: 'moderator', label: 'Модеры', icon: <FaUserShield /> },
  { id: 'user', label: 'Юзеры', icon: <FaUsers /> },
]

const genders = [
  { id: 'all', label: 'Все' },
  { id: 'male', label: 'Мужчины', icon: <FaMars /> },
  { id: 'female', label: 'Женщины', icon: <FaVenus /> },
]

const SearchBar = () => {
  const {
    searchTerm,
    setSearchTerm,
    filters,
    setFilter,
    resetFilters,
    getStats,
  } = useUserStore()

  const stats = getStats()
  const hasActiveFilters =
    searchTerm || filters.role !== 'all' || filters.gender !== 'all'

  return (
    <div className={s.root}>
      <SearchBarInput
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        resetFilters={resetFilters}
        hasActiveFilters={hasActiveFilters}
      />

      <Tabs
        currentType={filters.role}
        setFilter={setFilter}
        data={roles}
        title="Роль"
        type="role"
      />
      <Tabs
        currentType={filters.gender}
        setFilter={setFilter}
        data={genders}
        totalCount={stats.total}
        title="Пол"
        type="gender"
      />
    </div>
  )
}

export default SearchBar
