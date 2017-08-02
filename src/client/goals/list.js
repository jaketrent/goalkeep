// @flow
import type { Goal as GoalType, Styleable } from '../common/types'

import React from 'react'
import styleable from 'react-styleable'

import css from './list.css'
import Goal from './goal'

type Props = Styleable & {
  goals: (?GoalType)[]
}

export default styleable(css)((props: Props) =>
  <div className={props.css.list}>
    {(props.goals || []).map((g, i) => <Goal key={i} goal={g} />)}
  </div>
)
