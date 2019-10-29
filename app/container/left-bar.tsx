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
      zIndex: 1,
      width: '150px',
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
    </Paper>
  )
}

export default withRouter(observer(LeftBar));
