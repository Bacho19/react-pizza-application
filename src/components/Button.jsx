import React from 'react'
import classNames from 'classnames'

function Button({ className, outline, children, onClickButton }) {
  return (
    <button
      className={classNames('button', className, {
        'button--outline': outline,
      })}
      onClick={onClickButton}
    >
      {children}
    </button>
  )
}

export default Button
