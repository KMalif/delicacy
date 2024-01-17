import React from 'react'

import style from './Favorite.module.scss'
import { MiniFoodCard } from '../../component/MiniFoodCard/MiniFoodCard'

export default function Favorite() {
  return (
    <section className={style.container_favorite}>
        <div className={style.wrapper_card_more_recipe}>
            <MiniFoodCard/>
        </div>
    </section>
  )
}
