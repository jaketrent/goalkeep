// @flow
import type { Styleable } from '../types'

import React from 'react'
import styleable from 'react-styleable'

import css from './frame.css'

type Props = Styleable & {
  children: React$Element<any>
}

export default styleable(css)((props: Props) =>
  <div className={props.css.frame}>
    {props.children}
  </div>
)
