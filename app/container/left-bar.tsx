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

const list = [
  {
    id: 1,
    routeName: '',
    type: 'primary',
    title: '首页',
  },
  {
    id: 2,
    routeName: 'video',
    type: 'secondary',
    title: '视频',
  },
  {
    id: 3,
    routeName: 'album',
    type: 'primary',
    title: '相册',
  },
  {
    id: 4,
    routeName: 'setting',
    type: 'secondary',
    title: '设置',
  },
];

const LeftBar = (props: IProps, state: IState) => {
  const { history } = props;
  const classes = useStyles();

  useEffect(() => {
    // console.log('enter...');
  }, []);

  const onPage = (routeName: string) => {
    history.push(`/${routeName}`);
  }

  return (
    <Paper square={true}
      className={classes.paperRoot}>

      {list.map(item => (
        // @ts-ignore
        <Button variant="contained" key={item.id} color={item.type}
          onClick={() => onPage(item.routeName)}
          className={classes.buttonRoot}>{item.title}</Button>
      ))}

      <Button variant="contained" color="primary"
        onClick={store.increment}
        className={classes.buttonRoot}>收藏
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

      <p style={{marginTop: '15px',}}>Hello: {store.count}</p>

    </Paper>
  )
}

export default withRouter(observer(LeftBar));
