import React, { useEffect, ReactNode } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { observer } from 'mobx-react';
import { Paper } from '@material-ui/core';
import {
  makeStyles,
  Theme,
  createStyles,
} from '@material-ui/core/styles';

import LeftBar from '@con/left-bar';
import TopBar from '@con/top-bar';

interface IProps extends RouteComponentProps {
  history: any,
  children: ReactNode,
};
interface IState {};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paperRoot: {
      minHeight: '100vh',
      flexDirection: 'row',
    },
    childPaper: {
      position: 'fixed',
      right: 0,
      top: 0,
      width: 'calc(100% - 180px)',
      height: '100vh',
      overflow: 'auto',
    },
    contentRoot: {
      height: '100vh',
      padding: '66px 10px 10px 10px',
      backgroundColor: '#fff',
    },
  })
);

const AppLayer = (props: IProps, state: IState) => {
  const { children } = props;
  const classes = useStyles();

  useEffect(() => {
    // console.log('props: ', props);

    return () => {
      // console.log('leave...');
    };
  }, []);

  return (
    <Paper square={true}
      className={classes.paperRoot}>

      <LeftBar />

      <Paper square={true}
        className={classes.childPaper}>

        <TopBar />

        <Paper square={true}
          className={classes.contentRoot}>
          {children}
        </Paper>
      </Paper>

    </Paper>
  )
}

export default withRouter(observer(AppLayer));
