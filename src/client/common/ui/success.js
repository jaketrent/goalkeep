import React from 'react'
import styleable from 'react-styleable'

import Checkmark from './checkmark'
import css from './success.css'
import Spacer from './spacer'

export default styleable(css)(props =>
  <div className={props.css.success}>
    <Checkmark />
    <Spacer className={props.css.message}>
      {props.message || 'Success!'}
    </Spacer>
  </div>
)
