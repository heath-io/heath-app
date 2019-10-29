import React, { useEffect } from 'react';
import { Paper } from '@material-ui/core';
import {
  makeStyles,
  Theme,
  createStyles,
} from '@material-ui/core/styles';

import LeftBar from '@con/left-bar';
import TopBar from '@con/top-bar';
import Content from './content';

interface IProps {
  window?: () => Window,
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
  })
);

const Home = (props: IProps, state: IState) => {
  const classes = useStyles();

  useEffect(() => {
    // console.log('home props: ', props);
  });

  return (
    <Paper square={true}
      className={classes.paperRoot}>

      <LeftBar />

      <Paper square={true}
        className={classes.childPaper}>

        <TopBar />

        <Content />
      </Paper>

    </Paper>
  )
}

export default Home;
