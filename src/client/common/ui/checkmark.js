import React from 'react'
import styleable from 'react-styleable'

import css from './checkmark.css'

export default styleable(css)(props =>
  <svg
    className={props.css.checkmark}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 52 52"
  >
    <circle
      className={props.css.checkmarkCircle}
      cx="26"
      cy="26"
      r="25"
      fill="none"
    />
    <path
      className={props.css.checkmarkCheck}
      fill="none"
      d="M14.1 27.2l7.1 7.2 16.7-16.8"
    />
  </svg>
)
