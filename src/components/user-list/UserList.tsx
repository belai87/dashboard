import React, { useEffect, useState } from 'react'
import { FaChevronLeft } from 'react-icons/fa'
import useUserStore from '@/src/store'
import UserCard from '../user-card'
import SearchBar from '../search-bar'
import UserDetail from '../user-detail'
import s from './UserList.module.scss'
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
  if (isLoading || storeLoading)
    return <div className={s.loading}>Загрузка...</div>
  if (error || storeError)
    return <div className={s.error}>{error || storeError}</div>

  return (
    <div className={s.root}>
      <header className={s.root__header}>
        <div className={s.title}>
          <h1>Панель управления</h1>
          <p>Данные о пользователях в реальном времени</p>
        </div>
      </header>

      <div
        className={`${s['main-layout']} ${isDetailOpen ? s['show-detail'] : ''}`}
      >
        <aside className={s['users-list-panel']}>
          <SearchBar />

          <div className={s['users-scroll']}>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user: User) => (
                <UserCard
                  key={user.id}
                  user={user}
                  isActive={selectedUser?.id === user.id}
                  onSelect={handleSelectUser}
                />
              ))
            ) : (
              <div className={s['no-results']}>
                <p>😕 Пользователи не найдены</p>
              </div>
            )}
          </div>
        </aside>

        <main className={s['user-detail-panel']}>
          {selectedUser ? (
            <>
              <button className={s['back-button']} onClick={closeDetail}>
                <FaChevronLeft /> Назад к списку
              </button>
              <UserDetail user={selectedUser} />
            </>
          ) : (
            <div className={s['no-selection']}>
              <p>👈 Выберите пользователя из списка</p>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

export default UsersList
