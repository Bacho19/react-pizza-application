import React, { memo } from 'react'
import PropTypes from 'prop-types'

const Categories = memo(function Categories({
  activeItem,
  items,
  onClickItem,
}) {
  return (
    <div className="categories">
      <ul>
        <li
          className={activeItem === null ? 'active' : ''}
          onClick={() => {
            onClickItem(null)
          }}
        >
          All
        </li>
        {items &&
          items.map((name, index) => (
            <li
              className={activeItem === index ? 'active' : ''}
              onClick={() => {
                onClickItem(index)
              }}
              key={`${name}_${index}`}
            >
              {name}
            </li>
          ))}
      </ul>
    </div>
  )
})

Categories.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
  onClickItem: PropTypes.func,
}

export default Categories
