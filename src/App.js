import React from 'react'
import styleable from 'react-styleable'

import css from './app.css'
import Login from './client/login'

export default styleable(css)(props =>
  <div className={props.css.app}><Login /></div>
)
