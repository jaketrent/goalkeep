// @flow
import type { Styleable } from '../types'

import classNames from 'classnames'
import React from 'react'
import styleable from 'react-styleable'

import css from './add-button.css'

export type Size = 'large' | 'small'

type Props = Styleable & {
  onClick: SyntheticEvent => void,
  size: Size
}

const formatClassName = props =>
  classNames({
    [props.css.addButton]: true,
    [props.css[`addButton--${props.size}`]]: props.size
  })

const AddButton = (props: Props) =>
  <button className={formatClassName(props)} onClick={props.onClick}>
    +
  </button>

AddButton.defaultProps = {
  size: 'small'
}

export default styleable(css)(AddButton)
