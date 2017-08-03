// @flow
import { Link } from 'react-router-dom'
import React from 'react'
import styleable from 'react-styleable'

import AddButton from '../common/ui/add-button'
import css from './new-goal.css'

const NewGoal = styleable(css)(props =>
  <Link to="/new" className={props.css.newGoal}>
    <AddButton onClick={props.onClick} size="large" />
  </Link>
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
