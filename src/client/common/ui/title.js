import React from 'react'
import styleable from 'react-styleable'

import css from './title.css'

export default styleable(css)(props =>
  <div className={props.css.title}>
    goalkeep
  </div>
)
