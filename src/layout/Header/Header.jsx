import React from 'react'

import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation';

export const Header = () => {
  return (
    <header className={styles.header}>
        <div className={styles.wrapper_brand}>
          {/* link */}
            <h1>Delicacy</h1>
          {/* link */}
        </div>
        <Navigation/>
    </header>
  )
}
