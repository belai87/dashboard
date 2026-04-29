'use client'

import React from 'react'
import {
  FaCrown,
  FaLayerGroup,
  FaMars,
  FaSearch,
  FaTimes,
  FaUsers,
  FaUserShield,
  FaVenus,
} from 'react-icons/fa'
import useUserStore from '@/src/store'
import styles from './SearchBar.module.scss'

const SearchBar = () => {
  const [
    searchTerm,
    setSearchTerm,
    filters,
    setFilter,
    resetFilters,
    getStats,
  ] = useUserStore((state) => [
    state.searchTerm,
    state.setSearchTerm,
    state.filters,
    state.setFilter,
    state.resetFilters,
    state.getStats,
  ])

  const stats = getStats()

  const hasActiveFilters =
    searchTerm || filters.role !== 'all' || filters.gender !== 'all'

  return (
    <div className={styles.container}>
      <div className={styles['search-section']}>
        <div className={styles['input-wrapper']}>
          <FaSearch className={styles['search-icon']} />
          <input
            type="text"
            placeholder="Поиск пользователей..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <button
              className={styles['clear-btn']}
              onClick={() => setSearchTerm('')}
            >
              <FaTimes />
            </button>
          )}
        </div>
        {hasActiveFilters && (
          <button className={styles['reset-btn']} onClick={resetFilters}>
            Сбросить
          </button>
        )}
      </div>

      <div className={styles['filter-group']}>
        <div className={styles['group-header']}>
          <span className={styles['group-title']}>Роль</span>
          <span className={styles['group-count']}>{stats.total} всего</span>
        </div>
        <div className={styles.tabs}>
          {[
            { id: 'all', label: 'Все', icon: <FaLayerGroup /> },
            { id: 'admin', label: 'Админы', icon: <FaCrown /> },
            { id: 'moderator', label: 'Модеры', icon: <FaUserShield /> },
            { id: 'user', label: 'Юзеры', icon: <FaUsers /> },
          ].map((role) => (
            <button
              key={role.id}
              className={`${styles.tab} ${filters.role === role.id ? styles.active : ''}`}
              onClick={() => setFilter('role', role.id)}
            >
              {role.icon} <span>{role.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className={styles['filter-group']}>
        <div className={styles['group-header']}>
          <span className={styles['group-title']}>Пол</span>
        </div>
        <div className={styles.tabs}>
          {[
            { id: 'all', label: 'Все' },
            { id: 'male', label: 'Мужчины', icon: <FaMars /> },
            { id: 'female', label: 'Женщины', icon: <FaVenus /> },
          ].map((gender) => (
            <button
              key={gender.id}
              className={`${styles.tab} ${filters.gender === gender.id ? styles.active : ''}`}
              onClick={() => setFilter('gender', gender.id)}
            >
              {gender.icon} <span>{gender.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SearchBar
