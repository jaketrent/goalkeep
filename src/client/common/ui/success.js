// @flow
import type { Styleable } from '../types'

import React from 'react'
import styleable from 'react-styleable'

import Checkmark from './checkmark'
import css from './success.css'
import Spacer from './spacer'

type Props = Styleable & {
  message: React$Node<any>
}

export default styleable(css)((props: Props) =>
  <div className={props.css.success}>
    <Checkmark />
    <Spacer className={props.css.message}>
      {props.message || 'Success!'}
    </Spacer>
  </div>
)
