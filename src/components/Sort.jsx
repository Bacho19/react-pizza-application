import React, { useState, useEffect, useRef, memo } from 'react'
import PropTypes from 'prop-types'

const Sort = memo(function Sort({ onClickItem, items }) {
  const [showPopup, setShowPopup] = useState(false)
  const [activePopupIndex, setActivePopupIndex] = useState(0)
  const sortRef = useRef()
  const activePopupItem = items[activePopupIndex].name

  const onTogglePopup = () => {
    setShowPopup((prev) => !prev)
  }

  const hideSortListener = (e) => {
    if (!e.path.includes(sortRef.current)) {
      setShowPopup(false)
    }
  }

  const onSelectSort = (obj) => {
    onClickItem(obj)
    const findIndex = items.findIndex((el) => el.type === obj.type)
    setActivePopupIndex(findIndex)
    setShowPopup(false)
  }

  useEffect(() => {
    document.body.addEventListener('click', hideSortListener)

    return () => {
      document.body.removeEventListener('click', hideSortListener)
    }
  }, [])

  return (
    <div ref={sortRef} className="sort">
      <div className="sort__label">
        <svg
          className={showPopup ? 'rotate' : ''}
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Sort by:</b>
        <span onClick={onTogglePopup}>{activePopupItem}</span>
      </div>
      {showPopup && (
        <div className="sort__popup">
          <ul>
            {items &&
              items.map((item, index) => {
                return (
                  <li
                    key={`${item.type}_${index}`}
                    onClick={() => {
                      onSelectSort(item)
                    }}
                    className={activePopupIndex === index ? 'active' : ''}
                  >
                    {item.name}
                  </li>
                )
              })}
          </ul>
        </div>
      )}
    </div>
  )
})

Sort.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  onClickItem: PropTypes.func,
}

export default Sort
