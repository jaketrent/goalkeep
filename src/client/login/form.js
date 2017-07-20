import React from 'react'
import styleable from 'react-styleable'

import Avatar from '../common/ui/avatar'
import css from './form.css'
import Title from '../common/ui/title'

export default styleable(css)(props =>
  <form className={props.css.form} onSubmit={props.onSubmit}>
    <div className={props.css.body}>
      <Title />
      <div className={props.css.avatarFrame}>
        <Avatar email={props.values.email} />
      </div>
      <div className={props.css.form}>
        <label className={props.css.field} htmlFor="email">
          <span className={props.css.fieldLabel}>email</span>
          <input
            className={props.css.fieldInput}
            placeholder="email"
            name="email"
            id="email"
            type="text"
            value={props.values.email}
            onChange={props.onChange}
          />
        </label>
      </div>
    </div>
    <div className={props.css.buttons}>
      <button className={props.css.btn}>login</button>
    </div>
  </form>
)
