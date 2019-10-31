// import electron from 'electron';
import React, { useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { observer } from 'mobx-react';
import {
  Paper,
  Typography,
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
} from '@material-ui/core';
import {
  makeStyles,
  Theme,
  createStyles,
} from '@material-ui/core/styles';
import StarBorderIcon from '@material-ui/icons/StarBorder';

import AppTool from '@tool/app-tool';
import AppColor from '@tool/app-color';
import store from '@store/home/list';

interface IProps extends RouteComponentProps {
  history: any,
  title: string,
};
interface IState {};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paperRoot: {
      padding: '10px',
      backgroundColor: '#fff',
    },
    iconButton: {
      padding: '3px',
      marginRight: '5px',
      color: AppColor.fff,
    },
  })
);

const List = (props: IProps, state: IState) => {
  const { title } = props;
  const classes = useStyles();

  useEffect(() => {
    store.getData();

    // return () => {
      // console.log('leave...');
    // };
  }, []);

  const onPlay = (title: string) => {
    // console.log('play');
    // 创建一个新窗口 - 播放视频
    const uri = `${AppTool.serverVideo}${title}`;
    AppTool.createWindow(uri);
  }

  return (
    <Paper square={true}
      className={classes.paperRoot}>

      <Typography color="primary" variant="h6">{title}</Typography>

      <GridList>
        {store.thumbnails && store.thumbnails.map(item => (
          <GridListTile key={item.id}>
            <img src={item.uri} alt={item.title}
              onClick={() => onPlay(item.title)} />
            <GridListTileBar
              title={item.duration}
              actionIcon={
                <IconButton aria-label={`star ${item.title}`}
                  className={classes.iconButton}>
                  <StarBorderIcon />
                </IconButton>
              } />
          </GridListTile>
        ))}
      </GridList>

    </Paper>
  )
}

export default withRouter(observer(List));
