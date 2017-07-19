import {
  ApolloClient,
  ApolloProvider,
  createNetworkInterface
} from 'react-apollo'
import { BrowserRouter, Route } from 'react-router-dom'
import { CookiesProvider } from 'react-cookie'
import React from 'react'

import Login from './login'
import LoginConfirm from './login/confirm'

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
      <CookiesProvider>
        <ApolloProvider client={this.createClient()}>
          <BrowserRouter>
            <div>
              <Route path="/" exact component={Login} />
              <Route path="/login/confirm" exact component={LoginConfirm} />
            </div>
          </BrowserRouter>
        </ApolloProvider>
      </CookiesProvider>
    )
  }
}

export default App
