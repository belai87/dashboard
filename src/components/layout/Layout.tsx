import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { LayoutProps } from '@/common/types';
import styles from './Layout.module.scss';

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Административная панель управления пользователями" />
        <title>User Dashboard | Административная панель</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.layout}>
        <header className={styles.header}>
          <div className={styles.logo}>
            <Link href="/users">
              <h2>UserDash</h2>
            </Link>
          </div>
          <div className={styles.headerRight}>
            <span className={styles.badge}>Admin Panel</span>
          </div>
        </header>

        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
};

export default Layout;