// @flow
import React from 'react'

import Authed from '../common/ui/authed'
import Frame from '../common/ui/frame'

export default class extends React.Component {
  state: {
    year: ?number,
    quarter: ?number,
    week: ?number
  }
  state = { year: null, quarter: null, week: null }
  render() {
    return (
      <Authed>
        <Frame>This is for making new goals!</Frame>
      </Authed>
    )
  }
}
