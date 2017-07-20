import React from 'react'
import styleable from 'react-styleable'

import css from './full-center.css'

export default styleable(css)(props =>
  <div className={props.css.fullCenter}>
    {props.children}
  </div>
)
