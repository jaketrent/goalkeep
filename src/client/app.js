import {
  ApolloClient,
  ApolloProvider,
  createNetworkInterface
} from 'react-apollo'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { CookiesProvider } from 'react-cookie'
import React from 'react'

import NewGoal from './new-goal'
import Goals from './goals'
import Login from './login'
import LoginConfirm from './login/confirm'

class App extends React.Component {
  createClient() {
    return new ApolloClient({
      networkInterface: createNetworkInterface({
        uri: `${process.env.API_HOST}/graphql`
      })
    })
  }
  render() {
    return (
      <CookiesProvider>
        <ApolloProvider client={this.createClient()}>
          <BrowserRouter>
            <Switch>
              <Route path="/" exact component={Goals} />
              <Route path="/new" exact component={NewGoal} />
              <Route path="/login" exact component={Login} />
              <Route path="/login/confirm" exact component={LoginConfirm} />
            </Switch>
          </BrowserRouter>
        </ApolloProvider>
      </CookiesProvider>
    )
  }
}

export default App
