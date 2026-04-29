import { User } from '@/src/store/types'

export interface UsersResponse {
  users: User[]
  total: number
  skip: number
  limit: number
}

export interface UsersPageProps {
  users: User[]
  error: string | null
}

export interface DataResponse {
  users: User[]
  total: number
  skip: number
  limit: number
}
