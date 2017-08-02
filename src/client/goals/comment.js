// @flow
import type { Comment, Styleable } from '../common/types'

import React from 'react'
import styleable from 'react-styleable'

import Avatar from '../common/ui/avatar'
import css from './comment.css'

type Props = Styleable & { comment: Comment }

export default styleable(css)((props: Props) =>
  <div className={props.css.comment}>
    <div className={props.css.commentAvatar}>
      <Avatar email={props.comment.email} size="small" />
    </div>
    <div className={props.css.commentDesc}>
      {props.comment.desc}
    </div>
  </div>
)
