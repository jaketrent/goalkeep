import { gql, graphql } from 'react-apollo'
import qs from 'qs'
import React from 'react'
import { Redirect } from 'react-router-dom'
import { withCookies } from 'react-cookie'

import Frame from '../common/ui/frame'

class LoginConfirm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount = _ => {
    const query = qs.parse(this.props.location.search.substr(1))
    this.setState(
      _ => ({
        email: query.email,
        token: query.token
      }),
      async _ => {
        const res = await this.props.mutate({
          variables: { email: this.state.email, token: this.state.token }
        })
        const isSuccess = res.data.loginConfirm.isSuccess
        if (isSuccess) {
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

export default graphql(gql`
  mutation loginConfirm($email: String!, $token: String!) {
    loginConfirm(email: $email, token: $token) {
      isSuccess
      message
    }
  }
`)(withCookies(LoginConfirm))
