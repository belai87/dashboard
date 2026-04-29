import React from 'react'
import {
  FaBriefcase,
  FaCalendarAlt,
  FaCreditCard,
  FaCrown,
  FaEnvelope,
  FaHeartbeat,
  FaMapMarkerAlt,
  FaTint,
  FaUserShield,
  FaVenusMars,
} from 'react-icons/fa'
import styles from './UserDetail.module.scss'
import { User } from '@/src/store/types'

interface UserDetailProps {
  user: User
}
 
const UserDetail: React.FC<UserDetailProps> = ({ user }) => {
  const fullAddress = `${user.address.address}, ${user.address.city}`

  return (
    <div className={styles.container}>
      <div className={styles['header-card']}>
        <div
          className={styles.cover}
          style={{
            background: `linear-gradient(135deg, #6366f1 0%, #a855f7 100%)`,
          }}
        />
        <div className={styles['header-content']}>
          <div className={styles['avatar-section']}>
            <img
              src="/user.png"
              alt={user.firstName}
              className={styles.avatar}
            />
            <div className={`${styles.badge} ${styles[user.role]}`}>
              {user.role === 'admin' ? <FaCrown /> : <FaUserShield />}
            </div>
          </div>

          <div className={styles['main-info']}>
            <h1>
              {user.firstName} {user.lastName}
            </h1>
            <span className={styles.username}>@{user.username}</span>
            <p className={styles.title}>
              {user.company.title} в <strong>{user.company.name}</strong>
            </p>

            <div className={styles.tags}>
              <span className={styles.tag}>
                <FaVenusMars /> {user.gender}
              </span>
              <span className={styles.tag}>
                <FaCalendarAlt /> {user.age} лет
              </span>
              <span className={styles.tag}>
                <FaMapMarkerAlt /> {user.address.city}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles['details-grid']}>
        <section className={styles.card}>
          <h3>
            <FaEnvelope /> Контакты
          </h3>
          <div className={styles['info-list']}>
            <div className={styles.item}>
              <label>Email</label>
              <span>{user.email}</span>
            </div>
            <div className={styles.item}>
              <label>Телефон</label>
              <span>{user.phone}</span>
            </div>
            <div className={styles.item}>
              <label>Адрес</label>
              <span className={styles.multiline}>{fullAddress}</span>
            </div>
          </div>
        </section>

        <section className={styles.card}>
          <h3>
            <FaBriefcase /> Профессиональные данные
          </h3>
          <div className={styles['info-list']}>
            <div className={styles.item}>
              <label>Отдел</label>
              <span>{user.company.department}</span>
            </div>
            <div className={styles.item}>
              <label>Университет</label>
              <span>{user.university}</span>
            </div>
          </div>
        </section>

        <section className={`${styles.card} ${styles.finance}`}>
          <h3>
            <FaCreditCard /> Банковские данные
          </h3>
          <div className={styles['bank-card']}>
            <div className={styles['card-type']}>
              {user.bank.cardType.toUpperCase()}
            </div>
            <div className={styles['card-number']}>
              •••• •••• •••• {user.bank.cardNumber.slice(-4)}
            </div>
            <div className={styles['card-bottom']}>
              <span>{user.bank.cardExpire}</span>
              <span className={styles.currency}>{user.bank.currency}</span>
            </div>
          </div>
        </section>

        <section className={styles.card}>
          <h3>
            <FaHeartbeat /> Здоровье
          </h3>
          <div className={styles['stats-row']}>
            <div className={styles['stat-box']}>
              <span className={styles['stat-label']}>Кровь</span>
              <span className={styles['stat-value']}>
                <FaTint /> {user.bloodGroup}
              </span>
            </div>
            <div className={styles['stat-box']}>
              <span className={styles['stat-label']}>Рост</span>
              <span className={styles['stat-value']}>{user.height}</span>
            </div>
            <div className={styles['stat-box']}>
              <span className={styles['stat-label']}>Вес</span>
              <span className={styles['stat-value']}>{user.weight}</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default UserDetail
