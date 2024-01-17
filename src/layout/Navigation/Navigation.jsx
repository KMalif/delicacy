import React from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

import { FoodContext } from '../../context/FoodContext'
import { useCategories } from '../../hooks/useCategories'

import styles from './Navigation.module.scss'

export const Navigation = () => {
    const {categories} = useContext(FoodContext)
    const navigate = useNavigate()
    const { getCategories } = useCategories()
    const params = useParams()
    const { pathname } = useLocation()

    useEffect(() => {
        getCategories()
    }, [])

    const handleActiveNav = val => {
        navigate(`/${val}`)
    }

  return (
    <div>
        <nav className={styles.nav}>
            <div className={styles.wrapper_nav}>
                <ul className={styles.wrapper_links}>
                    {categories?.slice(0,6).map(val => {
                        return(
                            <React.Fragment key={val?.idCategory}>
                                <li>
                                    <button
                                        className={
                                            params.category === val?.strCategory ? styles.active : null
                                        }
                                        onClick={() => handleActiveNav(val?.strCategory)}
                                    >
                                        {val?.strCategory}
                                    </button>
                                </li>
                            </React.Fragment>
                        )
                    })}
                    <li>
                        <button
                        className={pathname === '/Favorite' ? styles.active : null}
                        onClick={() => handleActiveNav('Favorite')}
                        >
                            Favorite
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
  )
}
