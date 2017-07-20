import { gql, graphql } from 'react-apollo'
import React from 'react'

import Authed from '../common/ui/authed'
import Frame from '../common/ui/frame'

class Goals extends React.Component {
  render() {
    return (
      <Authed>
        <Frame>goals list</Frame>
      </Authed>
    )
  }
}

// TODO: real query for goals
export default graphql(gql`
  query channels {
    channels {
      id
      name
    }
  }
`)(Goals)
