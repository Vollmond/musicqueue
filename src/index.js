import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Layout from './components/Layout'
import registerServiceWorker from './registerServiceWorker'

import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const httpLink = new HttpLink({ uri: 'http://0.0.0.0:4000/graphql' })

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <Layout />
  </ApolloProvider>, document.getElementById('root'))
registerServiceWorker()
