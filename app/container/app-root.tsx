import React, { ReactNode } from 'react';

interface IProps {
  children: ReactNode,
};
interface IState {};

const AppRoot = (props: IProps, state: IState) => (
  <>{props.children}</>
)

export default AppRoot;
