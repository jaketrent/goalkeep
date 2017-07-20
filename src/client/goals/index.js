import { gql, graphql } from 'react-apollo'
import React from 'react'

import Authed from '../common/ui/authed'
import Frame from '../common/ui/frame'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = { email: '' }
  }
  render() {
    return (
      <Authed>
        <Frame>goals list</Frame>
      </Authed>
    )
  }
}

export default graphql(gql`
  query channels {
    channels {
      id
      name
    }
  }
`)(Login)
