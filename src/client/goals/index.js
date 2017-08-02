// @flow
import type { Goal } from '../common/types'

import { gql, graphql } from 'react-apollo'
import React from 'react'

import Authed from '../common/ui/authed'
import Frame from '../common/ui/frame'
import GoalsList from './list'
import PeriodPicker from './period-picker'

const tempGoals: Goal[] = [
  {
    id: 1,
    desc: 'This is one',
    comments: [
      {
        email: 'trent.jake@gmail.com',
        desc:
          "This is what I think of this, and it's so good because I think it's great!"
      }
    ]
  },
  { id: 2, desc: 'This is another', comments: [] }
]

class Goals extends React.Component {
  state: {
    year: ?number,
    quarter: ?number,
    week: ?number,
    goals: (?Goal)[]
  }
  state = { goals: tempGoals, year: null, quarter: null, week: null }
  handlePeriodPickerClick = evt => {
    const [period, num] = evt.target.name.split('-')
    this.setState(
      _ => ({ [period]: parseInt(num, 10) }),
      _ => {
        if (this.state.year && this.state.quarter && this.state.week) {
          this.setState(_ => ({ goals: tempGoals }))
        }
      }
    )
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
          <GoalsList goals={this.state.goals} />
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
