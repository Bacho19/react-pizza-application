import { SET_LOADING, SET_PIZZAS } from '../types'

const initialState = {
  pizzas: [],
  isLoaded: false,
}

const pizzasReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PIZZAS:
      return {
        ...state,
        pizzas: action.payload,
        isLoaded: true,
      }
    case SET_LOADING:
      return {
        ...state,
        isLoaded: false,
      }
    default:
      return state
  }
}

export default pizzasReducer
