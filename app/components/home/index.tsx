import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Paper } from '@material-ui/core';

import LeftBar from '@con/left-bar';

interface IProps {};
interface IState {};

const Home = (props: IProps, state: IState) => {

  useEffect(() => {
    console.log('home props: ', props);
  });

  return (
    <Paper square={true}>

      <LeftBar />

      <ul>
        <li>
          <p>Home Page33</p>
        </li>
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
  )
}

export default Home;
