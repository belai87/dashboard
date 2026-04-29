export interface UserStoreStateType {
  users: User[]
  selectedUser: User | null
  loading: boolean
  error: string | null
  searchTerm: string
  filters: Filters
}

export interface UserStoreActionsType {
  setUsers: (users: User[]) => void
  setSelectedUser: (user: User | null) => void
  setLoading: (loading: boolean) => void
  setError: (error: string | null) => void
  setSearchTerm: (term: string) => void
  setFilter: <K extends keyof Filters>(key: string, value: string) => void
  resetFilters: () => void
  getFilteredUsers: () => User[]
  getStats: () => Stats
}

export interface User {
  id: number
  firstName: string
  lastName: string
  maidenName: string
  age: number
  gender: 'male' | 'female'
  email: string
  phone: string
  username: string
  password: string
  birthDate: string
  image: string
  bloodGroup: string
  height: number
  weight: number
  eyeColor: string
  hair: Hair
  ip: string
  address: Address
  macAddress: string
  university: string
  bank: Bank
  company: Company
  ein: string
  ssn: string
  userAgent: string
  crypto: Crypto
  role: 'admin' | 'moderator' | 'user'
}

export interface Filters {
  role: 'all' | 'admin' | 'moderator' | 'user'
  gender: 'all' | 'male' | 'female'
}

export interface Stats {
  total: number
  admins: number
  moderators: number
  users: number
  male: number
  female: number
}

export interface Coordinates {
  lat: number
  lng: number
}

export interface Address {
  address: string
  city: string
  state: string
  stateCode: string
  postalCode: string
  coordinates: Coordinates
  country: string
}

export interface Hair {
  color: string
  type: string
}

export interface Bank {
  cardExpire: string
  cardNumber: string
  cardType: string
  currency: string
  iban: string
}

export interface Company {
  department: string
  name: string
  title: string
  address: Address
}

export interface Crypto {
  coin: string
  wallet: string
  network: string
}

export type UserStoreType = UserStoreStateType & UserStoreActionsType
