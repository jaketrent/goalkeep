import {
  ApolloClient,
  ApolloProvider,
  createNetworkInterface
} from 'react-apollo'
import { BrowserRouter, Route } from 'react-router-dom'
import React from 'react'

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
        <BrowserRouter>
          <Route path="/" exact component={Login} />
        </BrowserRouter>
      </ApolloProvider>
    )
  }
}

export default App
