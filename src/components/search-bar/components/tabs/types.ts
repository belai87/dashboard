import { ReactNode } from 'react'

type UserRole = 'all' | 'admin' | 'moderator' | 'user'

type FilterType = 'gender' | 'role'

export interface TabsProps {
  currentType: UserRole | string
  setFilter: (type: FilterType, value: string) => void
  totalCount?: number
  data: {
    id: string
    label: string
    icon?: ReactNode
  }[]
  title: string
  type: FilterType
}
