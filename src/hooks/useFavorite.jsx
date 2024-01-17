import { useContext } from 'react'
import toast from 'react-hot-toast'

import { FoodContext } from '../context/FoodContext'

export const useFavorite = () => {
    const { favorite, setFavorite } = useContext(FoodContext)

    const addToFavorite = data => {
        try {
          if (favorite) {
            const updatedFavorites = [...favorite, data]
            localStorage.setItem('favorite', JSON.stringify(updatedFavorites))
            setFavorite(updatedFavorites)
          } else {
            const initialFavorite = [data]
            localStorage.setItem('favorite', JSON.stringify([initialFavorite]))
            setFavorite(initialFavorite)
          }
          toast.success(`${data?.strMeal} added to favorite`)
        } catch (error) {
          toast.error(error.message)
        }
    }

    const deleteFavoriteByIdMeal = idMeal => {
        try {
          const storedFavorites = JSON.parse(localStorage.getItem('favorite'))
    
          if (storedFavorites) {
            const updatedFavorites = storedFavorites.filter(
              favorite => favorite.idMeal !== idMeal
            )
            localStorage.setItem('favorite', JSON.stringify(updatedFavorites))
            setFavorite(updatedFavorites)
            toast.success('Deleted successfully')
          }
        } catch (error) {
          toast.error(error.message)
        }
    }
    
  return { addToFavorite, deleteFavoriteByIdMeal }
}
