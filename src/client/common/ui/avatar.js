// @flow
import type { Styleable } from '../types'

import classNames from 'classnames'
import Gravatar from 'react-gravatar'
import isValidEmail from 'is-valid-email'
import React from 'react'
import styleable from 'react-styleable'

import css from './avatar.css'

type Props = Styleable & { email: string, size: 'large' | 'small' }

const mapSizeToPx = size =>
  ({
    large: 150,
    small: 30
  }[size])

const getSize = props => props.size || 'large'

const formatClassName = props =>
  classNames({
    [props.css.avatar]: true,
    [props.css['avatar--' + getSize(props)]]: true
  })

export default styleable(css)((props: Props) =>
  <div className={formatClassName(props)}>
    <Gravatar
      email={props.email}
      size={mapSizeToPx(getSize(props))}
      className={isValidEmail(props.email) ? props.css.imgValid : props.css.img}
    />
  </div>
)
