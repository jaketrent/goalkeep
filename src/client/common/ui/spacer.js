// @flow
import type { Styleable } from '../types'

import classNames from 'classnames'
import React from 'react'
import styleable from 'react-styleable'

import css from './spacer.css'

type Props = Styleable & {
  className: string,
  children: React$Element<any>
}

const formatClassName = (props, className = props.css.spacer) =>
  classNames({ [className]: true, [props.className]: props.className })

export const HorzSpacer = styleable(css)((props: Props) =>
  <div className={formatClassName(props, props.css.spacerHorz)}>
    {props.children}
  </div>
)

export default styleable(css)((props: Props) =>
  <div className={formatClassName(props)}>
    {props.children}
  </div>
)
