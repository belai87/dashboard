'use client';

import React from 'react';
import {
  FaSearch, FaTimes, FaUsers, FaCrown,
  FaUserShield, FaMars, FaVenus, FaLayerGroup
} from 'react-icons/fa';
import styles from './SearchBar.module.scss';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  filters: { role: string; gender: string };
  onFilterChange: (filters: any) => void;
  stats: any;
}

const SearchBar: React.FC<SearchBarProps> = ({
                                               searchTerm,
                                               onSearchChange,
                                               filters,
                                               onFilterChange,
                                               stats
                                             }) => {

  const updateFilter = (key: string, value: string) => {
    onFilterChange({ ...filters, [key]: value });
  };

  const resetFilters = () => {
    onSearchChange('');
    onFilterChange({ role: 'all', gender: 'all' });
  };

  const hasActiveFilters = searchTerm || filters.role !== 'all' || filters.gender !== 'all';

  return (
    <div className={styles.container}>
      {/* Поиск */}
      <div className={styles['search-section']}>
        <div className={styles['input-wrapper']}>
          <FaSearch className={styles['search-icon']} />
          <input
            type="text"
            placeholder="Поиск пользователей..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
          />
          {searchTerm && (
            <button className={styles['clear-btn']} onClick={() => onSearchChange('')}>
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

      {/* Группа фильтров по Ролям */}
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
              onClick={() => updateFilter('role', role.id)}
            >
              {role.icon} <span>{role.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Группа фильтров по Полу */}
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
              onClick={() => updateFilter('gender', gender.id)}
            >
              {gender.icon} <span>{gender.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
