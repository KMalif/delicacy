import React from 'react'
import { useParams } from 'react-router-dom'

import IcIngredient from '../../assets/ic-ingredient.svg'

import styles from './FoodCard.module.scss'


export const FoodCard = ({data}) => {
    const params = useParams()

  return (
    <article className={styles.card_container}>
        <div className={styles.card_wrapper}>
            <h1 className={styles.card_title}>
                {data?.strMeal || 'Foods name..'} 
            </h1>
            <p className={styles.card_paragraf}>{data?.strInstructions || 'instruction..'}</p>
            <h1 className={styles.card_title_ingredient}>
                Ingredients
            </h1>
            <div className={styles.card_ingredient}>
                <div className={styles.card_content}>
                    <div className={styles.bg_icon}>
                        <img src={IcIngredient} alt="icon_ingredient"/>
                    </div>
                    <div className={styles.text_content}>
                        <h2>{data?.strIngredient1}</h2>
                        <p>{data?.strMeasure1}</p>
                    </div>
                </div>
                <div className={styles.card_content}>
                    <div className={styles.bg_icon}>
                        <img src={IcIngredient} alt="icon_ingredient"/>
                    </div>
                    <div className={styles.text_content}>
                        <h2>{data?.strIngredient2}</h2>
                        <p>{data?.strMeasure2}</p>
                    </div>
                </div>
            </div>
            <div className={styles.card_ingredient}>
                <div className={styles.card_content}>
                    <div className={styles.bg_icon}>
                        <img src={IcIngredient} alt="icon_ingredient"/>
                    </div>
                    <div className={styles.text_content}>
                        <h2>{data?.strIngredient3}</h2>
                        <p>{data?.strMeasure3}</p>
                    </div>
                </div>
                <div className={styles.card_content}>
                    <div className={styles.bg_icon}>
                        <img src={IcIngredient} alt="icon_ingredient"/>
                    </div>
                    <div className={styles.text_content}>
                        <h2>{data?.strIngredient4}</h2>
                        <p>{data?.strMeasure4}</p>
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
                <img src={data?.strMealThumb || 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg'} alt="food-imge" />
            </div>
        </div>
    </article>
  )
}
