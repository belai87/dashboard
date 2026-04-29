'use client'

import { useCallback } from 'react'
import { useRouter } from 'next/navigation' // Для App Router используем navigation
import { FaUsers, FaArrowRight } from 'react-icons/fa'
import styles from './Home.module.scss'

export default function Home() {
  const router = useRouter()

  const handleStart = useCallback(() => {
    router.push('/users')
  }, [router])

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles['icon-box']}>
          <FaUsers />
        </div>

        <h1 className={styles.title}>
          Система управления <span>пользователями</span>
        </h1>

        <p className={styles.description}>
          Интеллектуальная панель мониторинга данных. Отслеживайте активность,
          управляйте ролями и просматривайте детальную статистику в реальном
          времени.
        </p>

        <button className={styles['start-btn']} onClick={handleStart}>
          Перейти к списку
          <FaArrowRight className={styles.arrow} />
        </button>
      </div>

      {/* Декоративный фон */}
      <div className={styles['bg-glow']} />
    </div>
  )
}
