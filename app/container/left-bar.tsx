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
      position: 'fixed',
      width: '180px',
      left: 0,
      top: 0,
      height: '100vh',
      overflow: 'auto',
      padding: '10px',
    },
    buttonRoot: {
      width: '100%',
      marginTop: '15px',
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
      <Button variant="contained" color="primary"
        onClick={store.increment}
        className={classes.buttonRoot}>首页
      </Button>
      <Button variant="contained" color="secondary"
        onClick={store.decrement}
        className={classes.buttonRoot}>视频
      </Button>
      <Button variant="contained" color="primary"
        onClick={store.increment}
        className={classes.buttonRoot}>相册
      </Button>
      <Button variant="contained" color="secondary"
        onClick={store.decrement}
        className={classes.buttonRoot}>新闻
      </Button>
      <Button variant="contained" color="primary"
        onClick={store.increment}
        className={classes.buttonRoot}>消息
      </Button>
      <Button variant="contained" color="secondary"
        onClick={store.decrement}
        className={classes.buttonRoot}>历史记录
      </Button>
      <Button variant="contained" color="primary"
        onClick={store.increment}
        className={classes.buttonRoot}>收藏
      </Button>
      <Button variant="contained" color="secondary"
        onClick={store.decrement}
        className={classes.buttonRoot}>设置
      </Button>
    </Paper>
  )
}

export default withRouter(observer(LeftBar));
