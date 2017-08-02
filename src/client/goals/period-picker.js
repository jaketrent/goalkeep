// @flow
import type { Styleable } from '../common/types'

import React from 'react'
import styleable from 'react-styleable'

import css from './period-picker.css'

type Props = Styleable & {
  year?: number,
  quarter?: number,
  week?: number,
  onClick: SyntheticEvent => void
}

const years = [new Date().getFullYear()]
const quarters = [1, 2, 3, 4]
const weeks = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

const Years = (props: Props) =>
  <div className={props.css.row}>
    {years.map(y =>
      <button
        key={y}
        className={y === props.year ? props.css.btnActive : props.css.btn}
        onClick={props.onClick}
        name={`year-${y}`}
      >
        {y}
      </button>
    )}
  </div>

const Quarters = (props: Props) =>
  <div className={props.css.row}>
    {quarters.map(q =>
      <button
        key={q}
        className={q === props.quarter ? props.css.btnActive : props.css.btn}
        onClick={props.onClick}
        name={`quarter-${q}`}
      >
        Q{q}
      </button>
    )}
  </div>

const Weeks = (props: Props) =>
  <div className={props.css.row}>
    {weeks.map(w =>
      <button
        key={w}
        className={w === props.week ? props.css.btnActive : props.css.btn}
        onClick={props.onClick}
        name={`week-${w}`}
      >
        {w}
      </button>
    )}
  </div>

export default styleable(css)((props: Props) =>
  <div className={props.css.picker}>
    <Years css={props.css} year={props.year} onClick={props.onClick} />
    <Quarters css={props.css} quarter={props.quarter} onClick={props.onClick} />
    <Weeks css={props.css} week={props.week} onClick={props.onClick} />
  </div>
)
