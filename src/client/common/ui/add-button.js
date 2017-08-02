// @flow
import type { Styleable } from '../types'

import React from 'react'
import styleable from 'react-styleable'

import css from './add-button.css'

type Props = Styleable & {
  onClick: SyntheticEvent => void
}

export default styleable(css)((props: Props) =>
  <button className={props.css.addButton} onClick={props.onClick}>
    +
  </button>
)
