import { gql, graphql } from 'react-apollo'
import React from 'react'
import styleable from 'react-styleable'

import css from './index.css'
import Frame from '../common/ui/frame'
import Avatar from '../common/ui/avatar'
import Title from '../common/ui/title'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = { email: '' }
  }
  handleFormChange = evt => {
    const target = evt.target
    this.setState(_ => ({ [target.name]: target.value }))
  }
  handleLoginSubmit = evt => {
    evt.preventDefault()
    this.props.mutate({ variables: { email: this.state.email } })
  }
  render() {
    return (
      <Frame>
        <form
          className={this.props.css.login}
          onSubmit={this.handleLoginSubmit}
        >
          <div className={this.props.css.body}>
            <Title />
            <div className={this.props.css.avatarFrame}>
              <Avatar email={this.state.email} />
            </div>
            <div className={this.props.css.form}>
              <label className={this.props.css.field} htmlFor="email">
                <span className={this.props.css.fieldLabel}>email</span>
                <input
                  className={this.props.css.fieldInput}
                  placeholder="email"
                  name="email"
                  id="email"
                  type="text"
                  value={this.state.email}
                  onChange={this.handleFormChange}
                />
              </label>
            </div>
          </div>
          <div className={this.props.css.buttons}>
            <button className={this.props.css.btn}>login</button>
          </div>
        </form>
      </Frame>
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
