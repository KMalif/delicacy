
import { useContext } from 'react'
import toast from 'react-hot-toast'

import { FoodContext } from '../context/FoodContext'
import { CallApi } from '../domain/CallApi'

export const useCategories = () => {
    const { setCategories } = useContext(FoodContext)
    const getCategories = async () => {
        try {
            const response = await CallApi({
                endpoint: '/categories.php',
                method: 'GET',
            })
            setCategories(response?.categories)
        }catch (error){
            toast.error(error.message)
        }
    }
  return { getCategories }
}
