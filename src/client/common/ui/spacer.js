import React from 'react'
import styleable from 'react-styleable'

import css from './spacer.css'

export default styleable(css)(props =>
  <div className={props.css.spacer}>
    {props.children}
  </div>
)
