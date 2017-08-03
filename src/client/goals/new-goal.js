// @flow
import type { Goal } from '../common/types'

import React from 'react'
import styleable from 'react-styleable'

import AddButton from '../common/ui/add-button'
import css from './new-goal.css'
import { HorzSpacer } from '../common/ui/spacer'

const NewGoal = styleable(css)(props =>
  <div className={props.css.newGoal}>
    <AddButton onClick={props.onClick} size="large" />
  </div>
)

class NewGoalContainer extends React.Component {
  handleClick = (evt: SyntheticEvent) => {
    console.log('new goal')
  }
  render() {
    return <NewGoal onClick={this.handleClick} />
  }
}

export default NewGoalContainer
