import React, { ReactNode } from 'react';

import AppTheme from './app-theme';

interface IProps {
  children: ReactNode,
};
interface IState {};

const AppRoot = (props: IProps, state: IState) => (
  <AppTheme>{props.children}</AppTheme>
)

export default AppRoot;
