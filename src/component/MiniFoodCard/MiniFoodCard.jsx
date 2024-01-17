import React from 'react'

import styles from './MiniFoodCard.module.scss'

export const MiniFoodCard = ({size}) => {

    const determineWidth = () => {
        switch (size) {
          case 'S':
            return '200px'
          case 'M':
            return '250px'
          default:
            return '200px' // Default size
        }
    }
    const determineHeight = () => {
        switch (size) {
            case 'S':
            return '140px'
            case 'M':
            return '190px'
            default:
            return '140px' // Default size
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
            style={{width: cardWidth, height: cardHeight}}>
            <div className={styles.bg_img}
                style={{width: imgSize, height: imgSize}}>
                <img 
                src="https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg"
                alt="img"
                className={styles.img} 
                />
            </div>
            {/* <h1 className={styles.food_name}>Food Name</h1> */}
            <div className={styles.content_wrapper}>
                <h1 className={styles.food_name}>Food Name</h1>
                <button>Remove from favorite</button>
            </div>
        </div>
    </article>
  )
}
