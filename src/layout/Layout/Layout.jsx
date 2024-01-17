import React from 'react'
import { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

import { Header } from '../Header/Header'

import styles from './Layout.module.scss'

export const Layout = () => {
  
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(()=> {
    window.scrollTo(0, 0)
    if (location.pathname === '/') {
      navigate('beef')
    }
  }, [location])

  return (
    <div>
        <Header/>
        <main className={styles.main__container}>
            <Outlet/>
        </main>
    </div>
  )
}
