import React, { useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { observer } from 'mobx-react';
import { Paper } from '@material-ui/core';
import {
  makeStyles,
  Theme,
  createStyles,
} from '@material-ui/core/styles';
import Coverflow from 'react-coverflow';

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

const ImageFlow = (props: IProps, state: IState) => {

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
      <Coverflow height="360"
        displayQuantityOfSide={2} navigation={true}
        infiniteScroll={true} enableHeading={true}>
        <img src={`${AppTool.serverImage}11.jpg`} alt="Polo Plus"
          data-action={`${AppTool.serverImage}11.jpg`} />
        <img src={`${AppTool.serverImage}22.jpg`} alt="Polo"
          data-action={`${AppTool.serverImage}22.jpg`} />
        <img src={`${AppTool.serverImage}33.jpg`} alt="CT5"
          data-action={`${AppTool.serverImage}33.jpg`} />
        <img src={`${AppTool.serverImage}44.jpg`} alt="Atenza"
          data-action={`${AppTool.serverImage}44.jpg`} />
        <img src={`${AppTool.serverImage}55.jpg`} alt="CC"
          data-action={`${AppTool.serverImage}55.jpg`} />
      </Coverflow>
    </Paper>
  )
}

export default withRouter(observer(ImageFlow));
