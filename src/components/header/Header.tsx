import s from './Header.module.scss'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className={s.root}>
      <div className={s.root__logo}>
        <Link href="/">
          <h2>UserDash</h2>
        </Link>
      </div>
      <span className={s.root__badge}>Admin Panel</span>
    </header>
  )
}

export default Header
