import React, { useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { observer } from 'mobx-react';
import { Paper } from '@material-ui/core';
import {
  makeStyles,
  Theme,
  createStyles,
} from '@material-ui/core/styles';
import Slider from 'react-slick';

import AppTool from '@tool/app-tool';

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

const Slick = (props: IProps, state: IState) => {

  useEffect(() => {
    // console.log('props: ', props);

    return () => {
      // console.log('leave...');
    };
  }, []);

  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    autoPlay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Paper square={true}
      className={classes.paperRoot}>
      <Slider {...settings}>
        <img src={`${AppTool.serverImage}11.jpg`} alt="11.jpg" />
        <img src={`${AppTool.serverImage}22.jpg`} alt="11.jpg" />
        <img src={`${AppTool.serverImage}33.jpg`} alt="11.jpg" />
        <img src={`${AppTool.serverImage}44.jpg`} alt="11.jpg" />
        <img src={`${AppTool.serverImage}55.jpg`} alt="11.jpg" />
      </Slider>
    </Paper>
  )
}

export default withRouter(observer(Slick));
