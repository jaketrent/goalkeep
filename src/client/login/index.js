import { gql, graphql } from 'react-apollo'
import React from 'react'

import Frame from '../common/ui/frame'
import LoginForm from './form'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = { email: '' }
  }
  handleFormChange = evt => {
    const target = evt.target
    this.setState(_ => ({ [target.name]: target.value }))
  }
  handleLoginSubmit = evt => {
    evt.preventDefault()
    this.props.mutate({ variables: { email: this.state.email } })
  }
  render() {
    return (
      <Frame>
        <LoginForm
          onChange={this.handleFormChange}
          onSubmit={this.handleFormSubmit}
          values={this.state}
        />
      </Frame>
    )
  }
}

export default graphql(gql`
  mutation login($email: String!) {
    login(email: $email) {
      email
      thing
    }
  }
`)(Login)
