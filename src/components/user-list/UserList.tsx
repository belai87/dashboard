'use client'

import React, { useEffect, useState } from 'react'
import { FaChevronLeft } from 'react-icons/fa'
import useUserStore from '@/src/store'
import UserCard from '../user-card'
import SearchBar from '../search-bar'
import UserDetail from '../user-detail'
import styles from './UserList.module.scss'
import { User } from '@/src/store/types'

interface UsersListProps {
  users: User[]
  error?: string | null
  isLoading?: boolean
}

const UsersList = ({ users, error, isLoading = false }: UsersListProps) => {
  const {
    setUsers,
    selectedUser,
    setSelectedUser,
    getFilteredUsers,
    loading: storeLoading,
    error: storeError,
  } = useUserStore()

  const [isDetailOpen, setIsDetailOpen] = useState(false)

  useEffect(() => {
    if (users && users.length > 0) {
      setUsers(users)
      if (!selectedUser) {
        setSelectedUser(users[0])
      }
    }
  }, [users, setUsers, selectedUser, setSelectedUser])

  const filteredUsers = getFilteredUsers()

  const handleSelectUser = (user: User) => {
    setSelectedUser(user)
    setIsDetailOpen(true)
  }

  const closeDetail = () => setIsDetailOpen(false)

  // Используем либо пропсы загрузки, либо состояние стора
  if (isLoading || storeLoading)
    return <div className={styles.loading}>Загрузка...</div>
  if (error || storeError)
    return <div className={styles.error}>{error || storeError}</div>

  return (
    <div className={styles.dashboard}>
      <header className={styles['dashboard-header']}>
        <div className={styles['title-section']}>
          <h1>Панель управления</h1>
          <p>Данные о пользователях в реальном времени</p>
        </div>
      </header>

      <div
        className={`${styles['main-layout']} ${isDetailOpen ? styles['show-detail'] : ''}`}
      >
        {/* Левая панель: Список */}
        <aside className={styles['users-list-panel']}>
          {/* SearchBar теперь сам берет/меняет данные в сторе, пропсы не нужны */}
          <SearchBar />

          <div className={styles['users-scroll']}>
            {filteredUsers.length > 0 ? (
              // Добавляем : User для параметра user
              filteredUsers.map((user: User) => (
                <UserCard
                  key={user.id}
                  user={user}
                  isActive={selectedUser?.id === user.id}
                  onSelect={handleSelectUser}
                />
              ))
            ) : (
              <div className={styles['no-results']}>
                <p>😕 Пользователи не найдены</p>
              </div>
            )}
          </div>
        </aside>

        {/* Правая панель: Детали */}
        <main className={styles['user-detail-panel']}>
          {selectedUser ? (
            <>
              <button className={styles['back-button']} onClick={closeDetail}>
                <FaChevronLeft /> Назад к списку
              </button>
              <UserDetail user={selectedUser} />
            </>
          ) : (
            <div className={styles['no-selection']}>
              <p>👈 Выберите пользователя из списка</p>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

export default UsersList
