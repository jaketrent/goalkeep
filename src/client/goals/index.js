// @flow
import { gql, graphql } from 'react-apollo'
import React from 'react'

import Authed from '../common/ui/authed'
import Frame from '../common/ui/frame'
import PeriodPicker from './period-picker'

class Goals extends React.Component {
  state: {
    year: ?number,
    quarter: ?number,
    week: ?number
  }
  state = {}
  handlePeriodPickerClick = evt => {
    const [period, num] = evt.target.name.split('-')
    this.setState(_ => ({ [period]: parseInt(num, 10) }))
  }
  render() {
    return (
      <Authed>
        <Frame>
          <PeriodPicker
            year={this.state.year}
            quarter={this.state.quarter}
            week={this.state.week}
            onClick={this.handlePeriodPickerClick}
          />
        </Frame>
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
