import classNames from 'classnames'
import React from 'react'
import styleable from 'react-styleable'

import css from './spacer.css'

const formatClassNames = props =>
  classNames({ [props.css.spacer]: true, [props.className]: props.className })

export default styleable(css)(props =>
  <div className={props.css.spacer}>
    {props.children}
  </div>
)
