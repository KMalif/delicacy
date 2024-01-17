import React from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'

import { MiniFoodCard } from '../../component/MiniFoodCard/MiniFoodCard'
import { FoodContext } from '../../context/FoodContext'
import { useFoodsData } from '../../hooks/useFoodsData'

import style from './Favorite.module.scss'

export const Favorite = () => {
  const { favorite } = useContext(FoodContext)
  const { getMealMoreRecipies } = useFoodsData()
  
  useEffect(() => {
    getMealMoreRecipies()
  }, [])
  
  return (
    <section className={style.container_favorite}>
      { favorite?.length >= 1 ? (
        <div className={style.wrapper_card_more_recipe}>
          {favorite?.map(val => {
            return (
              <React.Fragment key={val?.idMeal}>
                <MiniFoodCard data={val} size={'M'} />
              </React.Fragment>
            )
          })}
        </div>
      ) : (
        <h1>Favorite list is empty</h1>
      )}
    </section>
  )
}
