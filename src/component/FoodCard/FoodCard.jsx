import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import IcIngredient from '../../assets/ic-ingredient.svg'
import { FoodContext } from '../../context/FoodContext'
import { useFavorite } from '../../hooks/useFavorite'

import styles from './FoodCard.module.scss'

export const FoodCard = ({data}) => {
    const params = useParams()
    const [isFav, setIsFav] = useState(false)
    const { addToFavorite } = useFavorite()
    const { favorite } = useContext(FoodContext)

    useEffect(() => {
        const isFavorited = favorite?.some(item => item.idMeal === data.idMeal)
        setIsFav(isFavorited)
    }, [favorite, data])

    const handleFavoriteToggle = () => {
        if (!isFav) {
          addToFavorite(data)
          setIsFav(true)
        }
    }

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
                {params?.idMeal ? null : (
                    <Link to={`/detail/${data?.idMeal}`} className={styles.links}>Detail</Link>
                )}
                {isFav && !params?.idMeal ? null : params?.idMeal ? (
                    <Link to={'/favorite'} className={styles.links}>Go To Favorite</Link>
                ) : (
                    <button onClick={handleFavoriteToggle}>Add to Favorites</button>
                )}
            </div>

            <div className={styles.card_img}>
                <img src={data?.strMealThumb || 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg'} alt="food-imge" />
            </div>
        </div>
    </article>
  )
}
