import { gql, graphql } from 'react-apollo'
import React from 'react'
import styleable from 'react-styleable'

import css from './index.css'
import Title from '../common/ui/title'

class Login extends React.Component {
  handleLoginSubmit = evt => {
    evt.preventDefault()
    this.props.mutate({ variables: { email: this.input.value } })
  }
  render() {
    return (
      <form className={this.props.css.login} onSubmit={this.handleLoginSubmit}>
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
                ref={el => (this.input = el)}
                type="text"
              />
            </label>
          </div>
        </div>
        <div className={this.props.css.buttons}>
          <button className={this.props.css.btn}>login</button>
        </div>
      </form>
    )
  }
}

export default graphql(gql`
  mutation login($email: String!) {
    login(email: $email) {
      email
      thing
    }
  }
`)(styleable(css)(Login))
