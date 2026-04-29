import { create } from 'zustand'
import { UserStoreType } from '@/src/store/types'

const useUserStore = create<UserStoreType>()((set, get) => ({
  users: [],
  selectedUser: null,
  loading: true,
  error: null,
  searchTerm: '',
  filters: {
    role: 'all',
    gender: 'all',
  },

  setUsers: (users) => set({ users }),
  setSelectedUser: (user) => set({ selectedUser: user }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
  setSearchTerm: (searchTerm) => set({ searchTerm }),
  setFilter: (key, value) =>
    set((state) => ({
      filters: { ...state.filters, [key]: value },
    })),
  resetFilters: () =>
    set({
      searchTerm: '',
      filters: { role: 'all', gender: 'all' },
    }),

  getFilteredUsers: () => {
    const { users, searchTerm, filters } = get()
    let filtered = [...users]

    if (searchTerm.trim()) {
      const lowerTerm = searchTerm.toLowerCase()
      filtered = filtered.filter(
        (user) =>
          user.firstName.toLowerCase().includes(lowerTerm) ||
          user.lastName.toLowerCase().includes(lowerTerm) ||
          user.email.toLowerCase().includes(lowerTerm) ||
          user.role.toLowerCase().includes(lowerTerm),
      )
    }

    if (filters.role !== 'all') {
      filtered = filtered.filter((user) => user.role === filters.role)
    }

    if (filters.gender !== 'all') {
      filtered = filtered.filter((user) => user.gender === filters.gender)
    }

    return filtered
  },

  getStats: () => {
    const { users } = get()
    return {
      total: users.length,
      admins: users.filter((u) => u.role === 'admin').length,
      moderators: users.filter((u) => u.role === 'moderator').length,
      users: users.filter((u) => u.role === 'user').length,
      male: users.filter((u) => u.gender === 'male').length,
      female: users.filter((u) => u.gender === 'female').length,
    }
  },
}))

export default useUserStore
