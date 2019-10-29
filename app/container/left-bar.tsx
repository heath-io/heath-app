import React, { useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { observer } from 'mobx-react';
import { Paper, Button } from '@material-ui/core';
import {
  makeStyles,
  Theme,
  createStyles,
} from '@material-ui/core/styles';

import Store from '@store/common/left-bar';

interface IProps extends RouteComponentProps {
  history: any,
};
interface IState {};

const store = new Store();

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paperRoot: {
      // zIndex: 1,
      position: 'fixed',
      width: '180px',
      left: 0,
      top: 0,
      height: '100vh',
      overflow: 'auto',
    },
  })
);

const LeftBar = (props: IProps, state: IState) => {

  useEffect(() => {
    console.log('enter...');
  }, []);

  const classes = useStyles();
  return (
    <Paper square={true}
      className={classes.paperRoot}>
      <p>Hello: {store.count}</p>
      <p>Count: 11</p>
      <p>
        <Button variant="contained" color="primary"
          onClick={store.increment}>Increment
        </Button>
      </p>
      <p>Hi</p>
      <p>
        <Button variant="contained" color="secondary"
          onClick={store.decrement}>Decrement
        </Button>
      </p>
      <p>Bottom</p>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((item, index) => (
        <p key={index} style={{marginTop: '15px'}}>
          <Button variant="contained" color="primary">顺丰</Button>
        </p>
      ))}
      <p>End......</p>
    </Paper>
  )
}

export default withRouter(observer(LeftBar));
