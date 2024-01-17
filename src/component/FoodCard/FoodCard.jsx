import React from 'react'

import IcIngredient from '../../assets/ic-ingredient.svg'

import styles from './FoodCard.module.scss'


export const FoodCard = ({data}) => {
  return (
    <article className={styles.card_container}>
        <div className={styles.card_wrapper}>
            <h1 className={styles.card_title}>
                Backed Salmon with fennel
            </h1>
            <p className={styles.card_paragraf}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste repellat accusantium deserunt quibusdam recusandae soluta autem eaque alias voluptate magnam. Repudiandae est maiores fuga unde ratione, molestiae pariatur illum sit.</p>
            <h1 className={styles.card_title_ingredient}>
                Ingredients
            </h1>
            <div className={styles.card_ingredient}>
                <div className={styles.card_content}>
                    <div className={styles.bg_icon}>
                        <img src={IcIngredient} alt="icon_ingredient"/>
                    </div>
                    <div className={styles.text_content}>
                        <h2>Fennel</h2>
                        <p>2 Grams</p>
                    </div>
                </div>
            </div>
            
            <div className={styles.card_btn}>
                <button>
                    Detail
                </button>
                <button>
                    Add to 
                </button>
            </div>

            <div className={styles.card_img}>
                <img src="https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg" alt="food-imge" />
            </div>
        </div>
    </article>
  )
}
