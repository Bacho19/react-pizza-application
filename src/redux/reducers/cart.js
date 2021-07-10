import { ADD_PIZZAS_TO_CART, REMOVE_ALL_PIZZAS, REMOVE_PIZZA } from '../types'

const initialState = {
  items: {},
  pizzasCount: 0,
  pizzasPrice: 0,
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PIZZAS_TO_CART: {
      const newItems = {
        ...state.items,
        [action.payload.id]: !state.items[action.payload.id]
          ? [action.payload]
          : [...state.items[action.payload.id], action.payload],
      }

      const allPizzas = [].concat.apply([], Object.values(newItems))
      const totalPrice = allPizzas.reduce((sum, item) => item.price + sum, 0)

      return {
        ...state,
        items: newItems,
        pizzasCount: allPizzas.length,
        pizzasPrice: totalPrice,
      }
    }

    case REMOVE_PIZZA:
      const newPizzasCount =
        state.pizzasCount - state.items[action.payload].length
      const newPizzasPrice =
        state.pizzasPrice -
        state.items[action.payload][0].price *
          state.items[action.payload].length
      delete state.items[action.payload]
      return {
        ...state,
        pizzasCount: newPizzasCount,
        pizzasPrice: newPizzasPrice,
      }

    case REMOVE_ALL_PIZZAS:
      return {
        ...state,
        items: {},
        pizzasCount: 0,
        pizzasPrice: 0,
      }

    default:
      return state
  }
}

export default cartReducer
