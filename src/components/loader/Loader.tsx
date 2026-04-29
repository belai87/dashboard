import React from 'react'
import styles from './Loader.module.scss'

type LoaderProps = {
  message?: string
}

const Loader = ({ message = 'Загрузка...' }: LoaderProps) => {
  return (
    <div className={styles.loader}>
      <div className={styles.spinner}></div>
      <p>{message}</p>
    </div>
  )
}

export default Loader
