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
import s from './UserDetail.module.scss'
import { User } from '@/src/store/types'

interface UserDetailProps {
  user: User
}

const UserDetail: React.FC<UserDetailProps> = ({ user }) => {
  const fullAddress = `${user.address.address}, ${user.address.city}`
  return (
    <div className={s.container}>
      <div className={s.header}>
        <div
          className={s.cover}
          style={{
            background: `linear-gradient(135deg, #6366f1 0%, #a855f7 100%)`,
          }}
        />
        <div className={s.content}>
          <div className={s.avatar}>
            <img src="/user.png" alt={user.firstName} className={s.avatar} />
            <div className={`${s.badge} ${s[user.role]}`}>
              {user.role === 'admin' ? <FaCrown /> : <FaUserShield />}
            </div>
          </div>

          <div className={s.info}>
            <h1>
              {user.firstName} {user.lastName}
            </h1>
            <span className={s.username}>@{user.username}</span>
            <p className={s.title}>
              {user.company.title} в <strong>{user.company.name}</strong>
            </p>

            <div className={s.tags}>
              <span className={s.tag}>
                <FaVenusMars /> {user.gender}
              </span>
              <span className={s.tag}>
                <FaCalendarAlt /> {user.age} лет
              </span>
              <span className={s.tag}>
                <FaMapMarkerAlt /> {user.address.city}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className={s.grid}>
        <section className={s.card}>
          <h3>
            <FaEnvelope /> Контакты
          </h3>
          <div className={s.list}>
            <div className={s.item}>
              <label>Email</label>
              <span>{user.email}</span>
            </div>
            <div className={s.item}>
              <label>Телефон</label>
              <span>{user.phone}</span>
            </div>
            <div className={s.item}>
              <label>Адрес</label>
              <span className={s.multiline}>{fullAddress}</span>
            </div>
          </div>
        </section>

        <section className={s.card}>
          <h3>
            <FaBriefcase /> Профессиональные данные
          </h3>
          <div className={s.list}>
            <div className={s.item}>
              <label>Отдел</label>
              <span>{user.company.department}</span>
            </div>
            <div className={s.item}>
              <label>Университет</label>
              <span>{user.university}</span>
            </div>
          </div>
        </section>

        <section className={`${s.card} ${s.finance}`}>
          <h3>
            <FaCreditCard /> Банковские данные
          </h3>
          <div className={s['bank-card']}>
            <div className={s['card-type']}>
              {user.bank.cardType.toUpperCase()}
            </div>
            <div className={s['card-number']}>
              •••• •••• •••• {user.bank.cardNumber.slice(-4)}
            </div>
            <div className={s['card-bottom']}>
              <span>{user.bank.cardExpire}</span>
              <span className={s.currency}>{user.bank.currency}</span>
            </div>
          </div>
        </section>

        <section className={s.card}>
          <h3>
            <FaHeartbeat /> Здоровье
          </h3>
          <div className={s['stats-row']}>
            <div className={s['stat-box']}>
              <span className={s['stat-label']}>Кровь</span>
              <span className={s['stat-value']}>
                <FaTint /> {user.bloodGroup}
              </span>
            </div>
            <div className={s['stat-box']}>
              <span className={s['stat-label']}>Рост</span>
              <span className={s['stat-value']}>{user.height}</span>
            </div>
            <div className={s['stat-box']}>
              <span className={s['stat-label']}>Вес</span>
              <span className={s['stat-value']}>{user.weight}</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default UserDetail
