import React from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { FoodCard } from '../../component/FoodCard/FoodCard'
import { MiniFoodCard } from '../../component/MiniFoodCard/MiniFoodCard'

import { FoodContext } from '../../context/FoodContext'
import { useFoodsData } from '../../hooks/useFoodsData'

import styles from './Detail.module.scss'

export const Detail = () => {
    const { singleMeal, mealBeef } = useContext(FoodContext)
    const { getSingleData, getMealMoreRecipies } = useFoodsData()
    const params = useParams()

    useEffect(() => {
    if (params?.idMeal) {
        getSingleData(params?.idMeal)
        getMealMoreRecipies()
    }
    }, [params])
    
  return (
    <>
        <section className={styles.container_detail}>
            <FoodCard data={singleMeal}/>
        </section>
        <div className={styles.wrapper_more_recipies}>
            <h1 className={styles.title_more_recipies}>
                More Recipies
            </h1>
            <div className={styles.wrapper_card_more_rec}>
                {mealBeef?.slice(0, 10).map(val => {
                    return (
                    <React.Fragment key={val?.idMeal}>
                        <MiniFoodCard data={val}/>
                    </React.Fragment>
                    )
                })}
            </div>
        </div>
    </>
  )
}
