import React from 'react'
import styleable from 'react-styleable'

import css from './success.css'
import Ex from './ex'
import Spacer from './spacer'

export default styleable(css)(props =>
  <div className={props.css.success}>
    <Ex />
    <Spacer className={props.css.message}>
      {props.message || 'Error.'}
    </Spacer>
  </div>
)
