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

const images = [
  {
    id: 1,
    title: '01.mp4',
    uri: `${AppTool.serverImage}11.jpg`,
    duration: '05:52',
  },
  {
    id: 2,
    title: '02.mp4',
    uri: `${AppTool.serverImage}22.jpg`,
    duration: '01:25',
  },
  {
    id: 3,
    title: '03.mp4',
    uri: `${AppTool.serverImage}33.jpg`,
    duration: '03:07',
  },
  {
    id: 4,
    title: '04.mp4',
    uri: `${AppTool.serverImage}44.jpg`,
    duration: '02:06',
  },
  {
    id: 5,
    title: '05.mp4',
    uri: `${AppTool.serverImage}55.jpg`,
    duration: '03:07',
  },
  {
    id: 6,
    title: '06.mp4',
    uri: `${AppTool.serverImage}66.jpg`,
    duration: '03:24',
  },
  {
    id: 7,
    title: '07.mp4',
    uri: `${AppTool.serverImage}77.jpg`,
    duration: '01:20',
  },
  {
    id: 8,
    title: '08.mp4',
    uri: `${AppTool.serverImage}88.jpg`,
    duration: '01:31',
  },
];

const List = (props: IProps, state: IState) => {
  const { title } = props;
  const classes = useStyles();

  useEffect(() => {
    // console.log('props: ', props);

    return () => {
      // console.log('leave...');
    };
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
        {images.map(item => (
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
