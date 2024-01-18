import React from 'react'

import { useFavorite } from '../../hooks/useFavorite'

import styles from './MiniFoodCard.module.scss'

export const MiniFoodCard = ({data, size}) => {
    const { deleteFavoriteByIdMeal } = useFavorite()

    const determineWidth = () => {
        switch (size) {
          case 'S':
            return '200px'
          case 'M':
            return '250px'
          default:
            return '170px' 
        }
    }
    const determineHeight = () => {
        switch (size) {
            case 'S':
            return '140px'
            case 'M':
            return '220px'
            default:
            return '140px' 
        }
    }
    const determineImg = () => {
        switch (size) {
            case 'S':
            return '100px'
            case 'M':
            return '145px'
            default:
            return '100px' // Default size
        }
    }
    
    const cardWidth = determineWidth()
    const cardHeight = determineHeight()
    const imgSize = determineImg()

  return (
    <article className={styles.mini_card_container}>
        <div className={styles.card_wrapper}
            style={{width: cardWidth, height: cardHeight}}
          >
            <div className={styles.bg_img}
                style={{width: imgSize, height: imgSize}}>
                <img 
                src={data?.strMealThumb || "https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg"}
                alt="foods image"
                className={styles.img} 
                />
            </div>
            {size === 'M' ? (
              <div className={styles.content_wrapper}>
                  <h1 className={styles.food_name}>{data?.strMeal}</h1>
                  <button onClick={() => deleteFavoriteByIdMeal(data?.idMeal)}>Remove from favorite</button>
              </div>
            ) : (
              <h1 className={styles.food_name}>{data?.strMeal.length <= 20 ? data?.strMeal : `${data?.strMeal.substring(0, 17)}...` }</h1>
            )}
        </div>
    </article>
  )
}
