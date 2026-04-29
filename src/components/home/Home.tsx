'use client'

import { useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { FaArrowRight, FaUsers } from 'react-icons/fa'
import s from './Home.module.scss'

export default function Home() {
  const router = useRouter()

  const handleStart = useCallback(() => {
    router.push('/users')
  }, [router])

  return (
    <div className={s.root}>
      <div className={s.root__container}>
        <div className={s.icon}>
          <FaUsers />
        </div>

        <h1 className={s.root__title}>
          Система управления <span>пользователями</span>
        </h1>
 
        <p className={s.root__description}>
          Интеллектуальная панель мониторинга данных. Отслеживайте активность,
          управляйте ролями и просматривайте детальную статистику в реальном
          времени.
        </p>

        <button className={s.root__btn} onClick={handleStart}>
          Перейти к списку
          <FaArrowRight className={s.arrow} />
        </button>
      </div>
      <div className={s.root__bg} />
    </div>
  )
}
