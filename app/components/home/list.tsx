import React, { useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { observer } from 'mobx-react';
import { Paper } from '@material-ui/core';
import {
  makeStyles,
  Theme,
  createStyles,
} from '@material-ui/core/styles';
import ReactPlayer from 'react-player';

import AppTool from '@tool/app-tool';

interface IProps extends RouteComponentProps {
  history: any,
};
interface IState {};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paperRoot: {
      padding: '10px',
      backgroundColor: '#fff',
    },
  })
);

const List = (props: IProps, state: IState) => {

  useEffect(() => {
    // console.log('props: ', props);

    return () => {
      // console.log('leave...');
    };
  }, []);

  const classes = useStyles();
  return (
    <Paper square={true}
      className={classes.paperRoot}>
      <ReactPlayer url={`${AppTool.serverVideo}01.mp4`}
        playing={false} controls={true}
        playsinline={true}
        width="360px" height="auto" />
    </Paper>
  )
}

export default withRouter(observer(List));
