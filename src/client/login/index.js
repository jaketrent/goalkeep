import { gql, graphql } from 'react-apollo'
import React from 'react'

import FullCenter from '../common/ui/full-center'
import Success from '../common/ui/success'
import Error from '../common/ui/error'
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
  handleFormSubmit = async evt => {
    evt.preventDefault()
    const res = await this.props.mutate({
      variables: { email: this.state.email }
    })
    const isSuccess = res.data.login.isSuccess
    if (isSuccess) {
      this.setState(_ => ({ isResponded: true, isSuccess }))
    }
  }
  render = _ =>
    this.state.isResponded
      ? this.state.isSuccess
        ? <FullCenter>
            <Success
              message={`Success!  Email sent to ${this.state
                .email}.  Confirm your email to login.`}
            />
          </FullCenter>
        : <FullCenter>
            <Error message={`Failure. Email not sent. Try again later.`} />
          </FullCenter>
      : <LoginForm
          onChange={this.handleFormChange}
          onSubmit={this.handleFormSubmit}
          values={this.state}
        />
}

export default graphql(gql`
  mutation login($email: String!) {
    login(email: $email) {
      isSuccess
      email
    }
  }
`)(Login)
