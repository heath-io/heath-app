import React, { ReactNode } from 'react';
import { ThemeProvider } from '@material-ui/styles';

import ThemeConfig from '@mixin/theme-config';
import AppRoute from './app-route';

interface IProps {
  children: ReactNode,
};
interface IState {};

const AppTheme = (props: IProps, state: IState) => {
  return (
    <ThemeProvider theme={ThemeConfig}>
      <AppRoute />
    </ThemeProvider>
  )
}

export default AppTheme;
