import React from 'react';
import { render } from 'react-dom';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
// import { AppContainer } from 'react-hot-loader';

import AppTheme from '@con/app-theme';

const client = new ApolloClient({
  uri: 'http://47.103.144.70:5000/graphql',
  cache: new InMemoryCache(),
});

render(
  <ApolloProvider client={client}>
    <AppTheme />
  </ApolloProvider>,
  document.getElementById('root'),
);

// @ts-ignore-block
if (module.hot) {
  // @ts-ignore
  module.hot.accept('@con/app-theme', () => {
    const AppTheme = require('@con/app-theme').default;
    render(
      <ApolloProvider client={client}>
        <AppTheme />
      </ApolloProvider>,
      document.getElementById('root'),
    );
  });
}
