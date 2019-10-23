import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import AppTheme from '@con/app-theme';

render(
  <AppContainer>
    <AppTheme />
  </AppContainer>,
  document.getElementById('root'),
);

// @ts-ignore-block
if (module.hot) {
  // @ts-ignore
  module.hot.accept('@con/app-theme', () => {
    const AppTheme = require('@con/app-theme').default;
    render(
      <AppContainer>
        <AppTheme />
      </AppContainer>,
      document.getElementById('root'),
    );
  });
}
