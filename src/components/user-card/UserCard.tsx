import React, { memo } from 'react';
import { FaCrown, FaUserShield, FaUser, FaEnvelope } from 'react-icons/fa';
import { UserCardProps, User } from '@/common/types';
import styles from './UserCard.module.scss';

const getRoleConfig = (role: string) => {
  switch (role) {
    case 'admin': return { icon: <FaCrown />, class: styles.admin };
    case 'moderator': return { icon: <FaUserShield />, class: styles.moderator };
    default: return { icon: <FaUser />, class: styles.user };
  }
};

interface UserCardExtendedProps extends UserCardProps {
  isActive?: boolean;
  onSelect?: (user: User) => void;
}

const UserCard: React.FC<UserCardExtendedProps> = memo(({ user, isActive, onSelect }) => {
  const role = getRoleConfig(user.role);

  return (
    <div
      className={`${styles.card} ${isActive ? styles.active : ''}`}
      onClick={() => onSelect?.(user)}
      role="button"
    >
      <div className={styles['avatar-wrapper']}>
        <img src="/user.png" alt={user.firstName} className={styles.avatar} />
        <div className={`${styles['status-indicator']} ${role.class}`} />
      </div>

      <div className={styles.content}>
        <div className={styles['top-line']}>
          <h4 className={styles.name}>{user.firstName} {user.lastName}</h4>
          <span className={`${styles['role-tag']} ${role.class}`}>
            {role.icon}
          </span>
        </div>

        <div className={styles.details}>
          <p className={styles.email}>
            <FaEnvelope /> {user.email}
          </p>
          <div className={styles.meta}>
            <span>{user.age} лет</span>
            <span className={styles.dot}>•</span>
            <span>{user.gender === 'female' ? 'Женщина' : 'Мужчина'}</span>
          </div>
        </div>
      </div>

      {isActive && <div className={styles['active-indicator']} />}
    </div>
  );
});

UserCard.displayName = 'UserCard';

export default UserCard;
