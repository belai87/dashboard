import React from 'react';
import { LoaderProps } from '@/common/types';
import styles from './Loader.module.scss';

const Loader: React.FC<LoaderProps> = ({ message = 'Загрузка...' }) => {
  return (
    <div className={styles.loader}>
      <div className={styles.spinner}></div>
      <p>{message}</p>
    </div>
  );
};

export default Loader;