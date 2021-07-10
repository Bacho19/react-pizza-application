import { ADD_PIZZAS_TO_CART, REMOVE_ALL_PIZZAS, REMOVE_PIZZA } from '../types'

export const addPizzasToCart = (pizzaObj) => ({
  type: ADD_PIZZAS_TO_CART,
  payload: pizzaObj,
})

export const removeAllPizzasFromCart = () => ({
  type: REMOVE_ALL_PIZZAS,
})

export const removePizzaFromCart = (key) => ({
  type: REMOVE_PIZZA,
  payload: key,
})
