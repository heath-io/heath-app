import React, { ReactNode, useEffect } from 'react';

interface IProps {
  children: ReactNode,
};
interface IState {};

const AppRoot = (props: IProps, state: IState) => {

  useEffect(() => {
    console.log('hi');
  }, []);

  return (
    <>{props.children}</>
  )
}

export default AppRoot;
