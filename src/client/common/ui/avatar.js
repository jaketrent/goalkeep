import Gravatar from 'react-gravatar'
import isValidEmail from 'is-valid-email'
import React from 'react'
import styleable from 'react-styleable'

import css from './avatar.css'

export default styleable(css)(props =>
  <div className={props.css.avatar}>
    <Gravatar
      email={props.email}
      size={150}
      className={isValidEmail(props.email) ? props.css.imgValid : props.css.img}
    />
  </div>
)
