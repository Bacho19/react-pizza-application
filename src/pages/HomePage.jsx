import React, { useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setCategory, setSortBy } from '../redux/actions/filters'
import { fetchPizzas } from '../redux/actions/pizzas'

import { Categories, PizzaItem, Sort } from '../components'
import LoadingItem from '../components/PizzaItem/LoadingItem'
import { addPizzasToCart } from '../redux/actions/cart'

const categoryNames = ['Meat', 'Vegetarian', 'Grill', 'Sharp', 'Closed']

const sortItems = [
  { name: 'popular', type: 'popular', order: 'desc' },
  { name: 'price', type: 'price', order: 'desc' },
  { name: 'name', type: 'name', order: 'asc' },
]

function HomePage() {
  const { pizzas, isLoaded } = useSelector(({ pizzas }) => pizzas)
  const { category, sortBy } = useSelector(({ filters }) => filters)
  const cartPizzas = useSelector(({ cart }) => cart.items)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPizzas(category, sortBy))
  }, [dispatch, category, sortBy])

  const onSelectCategory = useCallback(
    (index) => {
      dispatch(setCategory(index))
    },
    [dispatch]
  )

  const onSelectSort = useCallback(
    (obj) => {
      dispatch(setSortBy(obj))
    },
    [dispatch]
  )

  const onAddToCart = (pizzaObj) => {
    dispatch(addPizzasToCart(pizzaObj))
  }

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClickItem={onSelectCategory}
          items={categoryNames}
          activeItem={category}
        />
        <Sort onClickItem={onSelectSort} items={sortItems} />
      </div>
      <h2 className="content__title">All pizzas</h2>
      <div className="content__items">
        {isLoaded
          ? pizzas.map((item) => {
              return (
                <PizzaItem
                  key={item.id}
                  {...item}
                  onAddToCart={onAddToCart}
                  addedCount={cartPizzas[item.id] && cartPizzas[item.id].length}
                />
              )
            })
          : Array(8)
              .fill()
              .map((_, index) => {
                return <LoadingItem key={index} />
              })}
      </div>
    </div>
  )
}

export default HomePage
