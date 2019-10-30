import React, { useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { observer } from 'mobx-react';
import { Paper } from '@material-ui/core';
import {
  makeStyles,
  Theme,
  createStyles,
} from '@material-ui/core/styles';

import List from './list';

interface IProps extends RouteComponentProps {
  history: any,
};
interface IState {};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paperRoot: {
      height: '100vh',
      padding: '66px 10px 10px 10px',
      backgroundColor: '#fff',
    },
  })
);

const Content = (props: IProps, state: IState) => {

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

      <List title="推荐视频" />
      <List title="时下流行" />
      <List title="VIP会员" />
      <List title="综艺" />
      <List title="动漫" />
      <List title="游戏" />
      <List title="短视频" />
      <List title="体育" />
      <List title="健身" />
      <List title="微电影" />
    </Paper>
  )
}

export default withRouter(observer(Content));
