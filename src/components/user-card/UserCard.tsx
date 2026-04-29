import React, { memo } from 'react'
import { FaCrown, FaEnvelope, FaUser, FaUserShield } from 'react-icons/fa'
import s from './UserCard.module.scss'
import { UserCardExtendedProps } from '@/src/components/user-card/types'
import cn from 'classnames'

const renderRole = (role: string) => {
  switch (role) {
    case 'admin':
      return { icon: <FaCrown />, class: s.admin }
    case 'moderator':
      return { icon: <FaUserShield />, class: s.moderator }
    default:
      return { icon: <FaUser />, class: s.user }
  }
}

const UserCard = memo(({ user, isActive, onSelect }: UserCardExtendedProps) => {
  const role = renderRole(user.role)

  return (
    <div
      className={cn(s.root, { [s.active]: isActive })}
      onClick={() => onSelect?.(user)}
      role="button"
    >
      <div className={s.avatarWrapper}>
        <img src="/user.png" alt={user.firstName} className={s.avatar} />
        <div className={cn(s.statusIndicator, role.class)} />
      </div>

      <div className={s.content}>
        <div className={s.topLine}>
          <h4 className={s.name}>
            {user.firstName} {user.lastName}
          </h4>
          <span className={cn(s.roleTag, role.class)}>{role.icon}</span>
        </div>

        <div className={s.details}>
          <p className={s.email}>
            <FaEnvelope /> {user.email}
          </p>
          <div className={s.meta}>
            <span>{user.age} лет</span>
            <span className={s.dot}>•</span>
            <span>{user.gender === 'female' ? 'Женщина' : 'Мужчина'}</span>
          </div>
        </div>
      </div>
 
      {isActive && <div className={s.activeIndicator} />}
    </div>
  )
})

UserCard.displayName = 'UserCard'

export default UserCard
