import React, { useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { observer } from 'mobx-react';
import {
  Paper,
  GridList,
  GridListTile,
} from '@material-ui/core';
import {
  makeStyles,
  Theme,
  createStyles,
} from '@material-ui/core/styles';

import store from '@store/album/list';

interface IProps extends RouteComponentProps {
  history: any,
};
interface IState {};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paperRoot: {
      padding: '10px 10px 20px 10px',
      backgroundColor: '#fff',
    },
    gridList: {
      flexWrap: 'wrap',
      justifyContent: 'space-around',
    },
  })
);

const List = (props: IProps, state: IState) => {

  useEffect(() => {
    // console.log('props: ', props);
    store.getData();

    return () => {
      // console.log('leave...');
    };
  }, []);

  const classes = useStyles();
  return (
    <Paper square={true}
      className={classes.paperRoot}>
      <GridList cellHeight={160} cols={3}
        className={classes.gridList}>
        {store.images && store.images.map((item, index) => (
          <GridListTile key={index} cols={1}>
            <img src={item.uri} alt={item.title} />
          </GridListTile>
        ))}
      </GridList>
    </Paper>
  )
}

export default withRouter(observer(List));
