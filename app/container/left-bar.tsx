import React, { useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { observer } from 'mobx-react';
import { Paper } from '@material-ui/core';

interface IProps extends RouteComponentProps {
  history: any,
};
interface IState {};

const LeftBar = (props: IProps, state: IState) => {

  useEffect(() => {
    // console.log('props: ', props);

    return () => {
      console.log('leave...');
    };
  }, []);

  return (
    <Paper square={true}>
      <p>Hello</p>
    </Paper>
  )
}

export default withRouter(observer(LeftBar));
