import React from 'react'
import styleable from 'react-styleable'

import Comments from './comments'
import NewComment from './new-comment'
import css from './goal.css'
import Spacer from '../common/ui/spacer'

export default styleable(css)(props =>
  <Spacer className={props.css.goal}>
    {props.goal.desc}
    <Comments comments={props.goal.comments} />
    <NewComment goal={props.goal} />
  </Spacer>
)
