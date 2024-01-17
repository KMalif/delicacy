import React, { useState, createContext, useEffect, useMemo } from 'react'

export const FoodContext = createContext({
  categories: [],
  setCategories: () => {},
  mealDetail: [],
  setMealDetail: () => {},
  mealBeef: [],
  setMealBeef: () => {},
  singleMeal: {},
  setSingleMeal: () => {},
  favorite: [],
  setFavorite: () => {},
  errorMsg: '',
  setErrorMsg: () => {},
})

export const FoodProvider = ({ children }) => {
  const [categories, setCategories] = useState([])
  const [mealDetail, setMealDetail] = useState([])
  const [mealBeef, setMealBeef] = useState([])
  const [singleMeal, setSingleMeal] = useState({})
  const [favorite, setFavorite] = useState([])
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    const storedFavorite = JSON.parse(localStorage.getItem('favorite'))
    if (storedFavorite) {
      setFavorite(storedFavorite)
    }
  }, [])

  const contextValue = useMemo(
    () => ({
      categories,
      setCategories,
      errorMsg,
      setErrorMsg,
      mealDetail,
      setMealDetail,
      mealBeef,
      setMealBeef,
      singleMeal,
      setSingleMeal,
      favorite,
      setFavorite,
    }),
    [categories, errorMsg, mealDetail, mealBeef, singleMeal, favorite]
  )

  return (
    <FoodContext.Provider value={contextValue}>{children}</FoodContext.Provider>
  )
}
