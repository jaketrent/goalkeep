import React from 'react'
import { Redirect } from 'react-router-dom'
import { withCookies } from 'react-cookie'

export default withCookies(
  props =>
    !!props.cookies.get('token') ? props.children : <Redirect to="/login" />
)
