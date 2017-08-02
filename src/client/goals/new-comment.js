// @flow
import type { Goal } from '../common/types'

import React from 'react'

import AddButton from '../common/ui/add-button'
import { HorzSpacer } from '../common/ui/spacer'

export default class extends React.Component {
  props: {
    goal: Goal
  }
  handleAddClick = (evt: SyntheticEvent) => {
    console.log('add to ', this.props.goal)
  }
  render() {
    return (
      <HorzSpacer>
        <AddButton onClick={this.handleAddClick} />
      </HorzSpacer>
    )
  }
}
