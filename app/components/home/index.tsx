import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Paper } from '@material-ui/core';
import {
  makeStyles,
  Theme,
  createStyles,
} from '@material-ui/core/styles';

import LeftBar from '@con/left-bar';
import TopBar from '@con/top-bar';

interface IProps {};
interface IState {};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paperRoot: {
      minHeight: '100vh',
      flexDirection: 'row',
    },
    childPaper: {
      flex: 1,
    },
  })
);

const Home = (props: IProps, state: IState) => {

  useEffect(() => {
    // console.log('home props: ', props);
  });

  const classes = useStyles();
  return (
    <Paper square={true}
      className={classes.paperRoot}>

      <LeftBar />

      <Paper square={true}
        className={classes.childPaper}>
        <TopBar />

        <ul>
          <li>
            <Link to="/setting">Setting Page</Link>
          </li>
          <li>
            <Link to="/404">Page404</Link>
          </li>
          <li>
            <i className="material-icons">shopping_basket</i>
          </li>
          <li>
            <Button variant="contained" color="primary">Primary Button</Button>
          </li>
          <li>
            <p>hello</p>
          </li>
          <li>
            <Button variant="contained" color="secondary">出淤泥而不染</Button>
          </li>
          <li>
            <p>End</p>
          </li>
        </ul>
      </Paper>

    </Paper>
  )
}

export default Home;
