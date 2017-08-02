// @flow
import type { Comment as CommentType, Styleable } from '../common/types'

import React from 'react'
import styleable from 'react-styleable'

import Comment from './comment'
import css from './comments.css'
import Spacer from '../common/ui/spacer'

type Props = Styleable & { comments: (?CommentType)[] }

export default styleable(css)((props: Props) =>
  <Spacer className={props.css.comments}>
    {(props.comments || []).map((c, i) => <Comment key={i} comment={c} />)}
  </Spacer>
)
