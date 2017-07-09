import {
  ApolloClient,
  ApolloProvider,
  createNetworkInterface
} from 'react-apollo'
import React from 'react'
import styleable from 'react-styleable'

import css from './app.css'
import Login from './login'

class App extends React.Component {
  createClient() {
    return new ApolloClient({
      networkInterface: createNetworkInterface({
        uri: 'http://localhost:3001/graphql'
      })
    })
  }
  render() {
    return (
      <ApolloProvider client={this.createClient()}>
        {/* TODO: extract to frame ui component */}
        <div className={this.props.css.app}>
          <Login />
        </div>
      </ApolloProvider>
    )
  }
}

export default styleable(css)(App)
