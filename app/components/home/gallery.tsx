import React, { useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { observer } from 'mobx-react';
import { Paper } from '@material-ui/core';
import {
  makeStyles,
  Theme,
  createStyles,
} from '@material-ui/core/styles';
import ImageGallery from 'react-image-gallery';

import AppTool from '@tool/app-tool';

interface IProps extends RouteComponentProps {
  history: any,
};
interface IState {};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paperRoot: {
      height: '200px',
      backgroundColor: '#fff',
    },
  })
);

const images = [
  { original: `${AppTool.serverImage}11.jpg` },
  { original: `${AppTool.serverImage}22.jpg` },
  { original: `${AppTool.serverImage}33.jpg` },
  { original: `${AppTool.serverImage}44.jpg` },
  { original: `${AppTool.serverImage}55.jpg` },
];

const Gallery = (props: IProps, state: IState) => {

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
      <ImageGallery items={images}
        showThumbnails={false}
        showPlayButton={false}
        showBullets={true}
        showIndex={true}
        autoPlay={false} />
    </Paper>
  )
}

export default withRouter(observer(Gallery));
