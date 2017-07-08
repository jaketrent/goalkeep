import React, { Component } from 'react'
import logo from './logo.svg'
import css from './App.css'

class App extends Component {
  render() {
    return (
      <div className={css.App}>
        <div className={css['App-header']}>
          <img src={logo} className={css['App-logo']} alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className={css['App-intro']}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default App
