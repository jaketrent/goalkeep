// @flow
import type { Styleable } from '../types'

import React from 'react'
import styleable from 'react-styleable'

import css from './success.css'
import Ex from './ex'
import Spacer from './spacer'

type Props = Styleable & {
  message: React$Node<any>
}

export default styleable(css)((props: Props) =>
  <div className={props.css.success}>
    <Ex />
    <Spacer className={props.css.message}>
      {props.message || 'Error.'}
    </Spacer>
  </div>
)
