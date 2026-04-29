import React from 'react'
import s from './Loader.module.scss'
import { LoaderProps } from './types'

const Loader = ({ message = 'Загрузка...' }: LoaderProps) => {
  return (
    <div className={s.root}>
      <div className={s.root__spinner}></div>
      <p>{message}</p>
    </div>
  )
}

export default Loader
