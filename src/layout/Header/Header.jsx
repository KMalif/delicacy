import React from 'react';
import { Link, useParams } from 'react-router-dom';

import { Navigation } from '../Navigation/Navigation';

import styles from './Header.module.scss';

export const Header = () => {
  const params = useParams()

  return (
    <header className={styles.header}>
        <div className={styles.wrapper_brand}>
          <Link to={'/Beef'} className={styles.links}>
            <h1>Delicacy</h1>
          </Link>
        </div>
        {params?.idMeal ? null : <Navigation/>}
    </header>
  )
}
