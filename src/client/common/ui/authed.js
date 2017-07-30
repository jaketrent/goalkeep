// @flow
import type { Cookies } from '../types'

import React from 'react'
import { Redirect } from 'react-router-dom'
import { withCookies } from 'react-cookie'

type Props = {
  children?: React$Element<any>,
  cookies: Cookies
}

export default withCookies(
  (props: Props) =>
    !!props.cookies.get('token') ? props.children : <Redirect to="/login" />
)
