import React from 'react'
import styleable from 'react-styleable'

import css from './frame.css'

export default styleable(css)(props =>
  <div className={props.css.frame}>
    {props.children}
  </div>
)
