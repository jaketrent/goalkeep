// @flow
import type { Styleable } from '../types'

import React from 'react'
import styleable from 'react-styleable'

import css from './ex.css'

export default styleable(css)((props: Styleable) =>
  <svg
    className={props.css.ex}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 52 52"
  >
    <circle className={props.css.exCircle} cx="26" cy="26" r="25" fill="none" />
    <path className={props.css.exEx1} d="M13.5,13.5L38.5,38.5" />
    <path className={props.css.exEx2} d="M38.5,13.5L13.5,38.5" />
  </svg>
)
