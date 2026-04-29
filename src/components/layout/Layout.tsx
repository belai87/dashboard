import React, { ReactNode } from 'react'
import Head from 'next/head'
import styles from './Layout.module.scss'
import Header from '@/src/components/header'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Административная панель управления пользователями"
        />
        <title>User Dashboard | Административная панель</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.layout}>
        <Header />
        <main className={styles.main}>{children}</main>
      </div>
    </>
  )
}

export default Layout
