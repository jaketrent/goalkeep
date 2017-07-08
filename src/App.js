import React from 'react'
import styleable from 'react-styleable'

import css from './app.css'

export default styleable(css)(props => <div className={props.css.app}>app</div>)
