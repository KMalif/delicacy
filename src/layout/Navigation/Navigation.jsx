import React from 'react'

import styles from './Navigation.module.scss'

export const Navigation = () => {
  return (
    <div>
        <nav className={styles.nav}>
            <div className={styles.wrapper_nav}>
                <ul className={styles.wrapper_links}>
                    <li>
                        <button className={styles.active}>Beef</button>
                    </li>
                    <li>
                        <button>Desert</button>
                    </li>
                    <li>
                        <button>Fish</button>
                    </li>
                    <li>
                        <button>Favorite</button>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
  )
}
