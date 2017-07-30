// @flow
import type { OperationComponent } from 'react-apollo'

import { gql, graphql } from 'react-apollo'
import qs from 'qs'
import React from 'react'
import { Redirect } from 'react-router-dom'
import { withCookies } from 'react-cookie'

import Frame from '../common/ui/frame'

type UrlQuery = {
  email: string,
  token: string
}

type MutateRequest = {
  variables: {
    email: string,
    token: string
  }
}

type MutateResponse = {
  data: {
    loginConfirm: {
      isSuccess: boolean
    }
  }
}

class LoginConfirm extends React.Component {
  props: {
    cookies: { set: (string, string, { path: string }) => void },
    mutate: MutateRequest => MutateResponse,
    location: { search: string }
  }
  state: {
    email: string,
    token: string,
    isResponded: boolean
  }
  state = { email: '', token: '', isResponded: false }
  componentDidMount = _ => {
    const query: UrlQuery = qs.parse(this.props.location.search.substr(1))
    this.setState(
      _ => ({
        email: query.email,
        token: query.token
      }),
      async _ => {
        const res = await this.props.mutate({
          variables: { email: this.state.email, token: this.state.token }
        })
        if (res.data.loginConfirm.isSuccess) {
          this.props.cookies.set('token', query.token, { path: '/' })
        }
        this.setState(_ => ({
          isResponded: true
        }))
      }
    )
  }
  // TODO: redirect with message or add alert
  renderResponse = _ => (this.state.isResponded ? <Redirect to="/" /> : null)
  render = _ =>
    <Frame>
      {this.renderResponse()}
    </Frame>
}

const withLoginConfirm: OperationComponent = graphql(gql`
  mutation loginConfirm($email: String!, $token: String!) {
    loginConfirm(email: $email, token: $token) {
      isSuccess
    }
  }
`)

export default withLoginConfirm(withCookies(LoginConfirm))
