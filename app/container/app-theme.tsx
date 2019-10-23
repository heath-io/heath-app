import React from 'react';
import { ThemeProvider } from '@material-ui/styles';

import ThemeConfig from '@mixin/theme-config';
import AppRoot from './app-root';
import AppRoute from './app-route';

interface IProps {};
interface IState {};

const AppTheme = (props: IProps, state: IState) => {
  return (
    <ThemeProvider theme={ThemeConfig}>
      <AppRoot>
        <AppRoute />
      </AppRoot>
    </ThemeProvider>
  )
}

export default AppTheme;
