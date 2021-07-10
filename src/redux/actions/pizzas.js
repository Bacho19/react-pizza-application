import axios from 'axios'
import { SET_LOADING, SET_PIZZAS } from '../types'

export const setLoading = (payload) => ({
  type: SET_LOADING,
  payload,
})

export const fetchPizzas = (category, sortBy) => {
  return (dispatch) => {
    dispatch(setLoading(false))
    axios
      .get(
        `http://localhost:3001/pizzas${
          category !== null
            ? `?category=${category}&_sort=${sortBy.type}&_order=${sortBy.order}`
            : `?_sort=${sortBy.type}&_order=${sortBy.order}`
        }`
      )
      .then(({ data }) => {
        dispatch(setPizzas(data))
      })
  }
}

export const setPizzas = (items) => ({
  type: SET_PIZZAS,
  payload: items,
})
