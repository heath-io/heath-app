import React, { useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { observer } from 'mobx-react';
import { Paper } from '@material-ui/core';
import {
  makeStyles,
  Theme,
  createStyles,
} from '@material-ui/core/styles';

import AppLayer from '@con/app-layer';

interface IProps extends RouteComponentProps {
  history: any,
};
interface IState {};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paperRoot: {
      backgroundColor: '#fff',
    },
  })
);

const Video = (props: IProps, state: IState) => {

  useEffect(() => {
    // console.log('props: ', props);

    return () => {
      // console.log('leave...');
    };
  }, []);

  const classes = useStyles();
  return (
    <AppLayer>
      <Paper square={true}
        className={classes.paperRoot}>
        <p>Video</p>
        <p>Video</p>
        <p>Video</p>
      </Paper>
    </AppLayer>
  )
}

export default withRouter(observer(Video));
