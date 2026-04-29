'use client';

import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import UserCard from '../UserCard';
import SearchBar from '../SearchBar';
import UserDetail from '../UserDetail';
import { User } from '@/common/types';
import styles from "./UserList.module.scss";

interface UsersListProps {
  users: User[];
  error?: string | null;
  isLoading?: boolean;
}

const UsersList = ({ users, error, isLoading = false }: UsersListProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [filters, setFilters] = useState({ role: 'all', gender: 'all' });
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  useEffect(() => {
    if (users.length > 0 && !selectedUser) {
      setSelectedUser(users[0]);
    }
  }, [users, selectedUser]);

  const filteredUsers = useMemo(() => {
    const term = searchTerm.toLowerCase();
    return users.filter((user) => {
      const matchesSearch = term === '' ||
        user.firstName.toLowerCase().includes(term) ||
        user.lastName.toLowerCase().includes(term) ||
        user.email.toLowerCase().includes(term) ||
        user.role.toLowerCase().includes(term);

      const matchesRole = filters.role === 'all' || user.role === filters.role;
      const matchesGender = filters.gender === 'all' || user.gender === filters.gender;

      return matchesSearch && matchesRole && matchesGender;
    });
  }, [users, searchTerm, filters]);

  const stats = useMemo(() => ({
    total: users.length,
    admins: users.filter(u => u.role === 'admin').length,
    moderators: users.filter(u => u.role === 'moderator').length,
    male: users.filter(u => u.gender === 'male').length,
    female: users.filter(u => u.gender === 'female').length,
  }), [users]);

  const handleSelectUser = useCallback((user: User) => {
    setSelectedUser(user);
    setIsDetailOpen(true);
  }, []);

  const closeDetail = () => setIsDetailOpen(false);

  if (isLoading) return <div className={styles.loading}>Загрузка...</div>;

  return (
    <div className={styles.dashboard}>
      <header className={styles['dashboard-header']}>
        <div className={styles['title-section']}>
          <h1>Панель управления</h1>
          <p>Данные о пользователях в реальном времени</p>
        </div>
      </header>

      <div className={`${styles['main-layout']} ${isDetailOpen ? styles['show-detail'] : ''}`}>

        <aside className={styles['users-list-panel']}>
          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            filters={filters}
            onFilterChange={setFilters}
            stats={stats}
          />
          <div className={styles['users-scroll']}>
            {filteredUsers.map((user) => (
              <UserCard
                key={user.id}
                user={user}
                isActive={selectedUser?.id === user.id}
                onSelect={handleSelectUser}
              />
            ))}
          </div>
        </aside>

        <main className={styles['user-detail-panel']}>
          {selectedUser && (
            <>
              <button className={styles['back-button']} onClick={closeDetail}>
                <FaChevronLeft /> Назад к списку
              </button>
              <UserDetail user={selectedUser} />
            </>
          )}
        </main>
      </div>
    </div>
  );
};

export default UsersList;
