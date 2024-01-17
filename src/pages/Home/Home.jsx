import React, { useContext, useEffect } from 'react'

import styles from './Home.module.scss'
import { FoodCard } from '../../component/FoodCard/FoodCard'
import { MiniFoodCard } from '../../component/MiniFoodCard/MiniFoodCard'
import { FoodContext } from '../../context/FoodContext'
import { useFoodsData } from '../../hooks/useFoodsData'
import { useParams } from 'react-router-dom'

export const Home = () => {
  
  const {mealDetail, mealBeef} = useContext(FoodContext)
  const {getMealByCategory, getMealMoreRecipies} = useFoodsData()

  const params = useParams()
  useEffect(()=> {
    getMealByCategory(params.category)
    getMealMoreRecipies()
  }, [params])


  return (
    <section className={styles.container_home}>
        <div className={styles.wrapper_card}>
            {mealDetail?.map((val, i) => {
              const foods = val.meals[0]
              return (
                <React.Fragment key={foods?.idMeal}>
                  <FoodCard data={foods}/>
                </React.Fragment>
              )
            })}
        </div>

        <div className={styles.wrapper_more_recipies}>
            <h1 className={styles.title_more_recipies}> More Recipe</h1>
            <div className={styles.wrapper_card_more_rec}>
                {/* component more recipe */}
                <MiniFoodCard/>
            </div>
        </div>
    </section>
  )
}
