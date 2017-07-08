import React from 'react'
import styleable from 'react-styleable'

import css from './index.css'
import Title from '../common/ui/title'

class Login extends React.Component {
  render() {
    return (
      <div className={this.props.css.login}>
        <div className={this.props.css.body}>
          <Title />
          <div className={this.props.css.form}>
            <label className={this.props.css.field} htmlFor="email">
              <span className={this.props.css.fieldLabel}>email</span>
              <input
                className={this.props.css.fieldInput}
                placeholder="email"
                name="email"
                id="email"
                type="text"
              />
            </label>
          </div>
        </div>
        <div className={this.props.css.buttons}>
          <button className={this.props.css.btn}>
            login
          </button>
        </div>
      </div>
    )
  }
}

export default styleable(css)(Login)
