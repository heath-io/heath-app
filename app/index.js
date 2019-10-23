import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import AppRoot from '@comp/common/app-root';

render(
  <AppContainer>
    <AppRoot />
  </AppContainer>,
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept('@comp/common/app-root', () => {
    const AppRoot = require('@comp/common/app-root').default;
    render(
      <AppContainer>
        <AppRoot />
      </AppContainer>,
      document.getElementById('root'),
    );
  });
}
