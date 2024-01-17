
import { useContext } from 'react'
import toast from 'react-hot-toast'
import { FoodContext } from '../context/FoodContext'
import { CallApi } from '../domain/CallApi'

export const useFoodsData = () => {
    const { setMealDetail, setMealBeef, setSingleMeal } = useContext(FoodContext)
    
    const getMealByCategory = async category => {
      try {
        const response = await CallApi({
          endpoint: `/filter.php?c=${category}`,
          method: 'GET',
        })
        const idMeal = response?.meals?.slice(0, 5).map(val => {
          return CallApi({
            endpoint: `/lookup.php?i=${val?.idMeal}`,
            method: 'GET',
          })
        })
        const data = await Promise.all(idMeal)
        setMealDetail(data)
      } catch (error) {
        toast.error(error.message)
      }
    }
    const getMealMoreRecipies = async () => {
      try {
        const response = await CallApi({
          endpoint: `/filter.php?c=Beef`,
          method: 'GET',
        })
        setMealBeef(response?.meals)
      } catch (error) {
        toast.error(error.message)
      }
    }
    const getSingleData = async idMeal => {
      try {
        const response = await CallApi({
          endpoint: `/lookup.php?i=${idMeal}`,
          method: 'GET',
        })
        setSingleMeal(response?.meals[0])
      } catch (error) {
        toast.error(error.message)
      }
    }
  
    return { getMealByCategory, getMealMoreRecipies, getSingleData }
}