import React, { ReactNode, useEffect } from 'react';

interface IProps {
  children: ReactNode,
};
interface IState {};

const AppRoot = (props: IProps, state: IState) => {

  useEffect(() => {
    // console.log('root...');
  }, []);

  return (
    <>{props.children}</>
  )
}

export default AppRoot;
