import React from 'react'
import { Header } from '../Header/Header'
import { Outlet } from 'react-router-dom'

import styles from './Layout.module.scss'

export const Layout = () => {
  return (
    <div>
        <Header/>
        <main className={styles.main__container}>
            <Outlet/>
        </main>
    </div>
  )
}
