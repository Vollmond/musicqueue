// @flow

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Layout from './components/Layout'
import registerServiceWorker from './registerServiceWorker'

import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const httpLink = new HttpLink({ uri: '/graphql' })

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

function getRoot() {
  const root = document.getElementById('root')
  if (root == null) {
    throw new Error('No root element, you ruined everything!')
  }
  return root
}

ReactDOM.render(
  <ApolloProvider client={client}>
    <Layout />
  </ApolloProvider>,
  getRoot()
)
registerServiceWorker()
