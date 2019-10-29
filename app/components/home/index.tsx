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
      position: 'fixed',
      right: 0,
      top: 0,
      width: 'calc(100% - 180px)',
      height: '100vh',
      overflow: 'auto',
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
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((item, index) => (
            <p key={index} style={{marginTop: '15px'}}>
              <Button variant="contained" color="primary">志，当立于青天白云之上，方可不沾染尘埃...</Button>
            </p>
          ))}
          <p>End......</p>
        </ul>
      </Paper>

    </Paper>
  )
}

export default Home;
