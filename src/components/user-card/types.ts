import { User } from '@/src/store/types'

export interface UserCardExtendedProps extends UserCardProps {
  isActive?: boolean
  onSelect?: (user: User) => void
}

export interface UserCardProps {
  user: User
}
