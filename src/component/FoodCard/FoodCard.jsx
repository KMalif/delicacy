import React from 'react'

import IcIngredient from '../../assets/ic-ingredient.svg'

import styles from './FoodCard.module.scss'


export const FoodCard = ({data}) => {
  return (
    <article className={styles.card_container}>
        <div className={styles.card_wrapper}>
            <h1 className={styles.card_title}>
                {data?.strMeal || 'Beef burgionon'} 
            </h1>
            <p className={styles.card_paragraf}>{data?.strInstructions || 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nobis culpa maxime sunt provident molestiae explicabo doloribus incidunt quidem maiores ipsam iusto et enim ut commodi repudiandae, ab quibusdam dolorem.'}</p>
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
