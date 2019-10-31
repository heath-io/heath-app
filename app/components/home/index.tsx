import React, { useEffect } from 'react';
import {
  Zoom,
  Fab,
} from '@material-ui/core';
import {
  makeStyles,
  Theme,
  createStyles,
} from '@material-ui/core/styles';
import RefreshIcon from '@material-ui/icons/Refresh';

import AppLayer from '@con/app-layer';
import List from './list';

interface IProps {
  window?: () => Window,
};
interface IState {};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fabRoot: {
      position: 'absolute',
      width: '46px',
      height: '46px',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
  })
);

const Home = (props: IProps, state: IState) => {
  const classes = useStyles();

  useEffect(() => {
    // console.log('home props: ', props);
  });

  return (
    <AppLayer>

      <List title="推荐视频" />

      <Zoom in={true}>
        <Fab color="primary" aria-label="Refresh"
          className={classes.fabRoot}><RefreshIcon /></Fab>
      </Zoom>

    </AppLayer>
  )
}

export default Home;
