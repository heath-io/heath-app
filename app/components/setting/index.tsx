import React from 'react';
import { Link } from 'react-router-dom';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { Paper } from '@material-ui/core';

import AppLayer from '@con/app-layer';

const GetHello = gql`
  query {
    hello
  }
`;

const Setting = () => {

  const { loading, error, data } = useQuery(GetHello);
  if(loading) {
    return (
      <AppLayer>
        <Paper square={true}>
          <p>Loading...</p>
        </Paper>
      </AppLayer>
    )
  }
  if(error) {
    return (
      <AppLayer>
        <Paper square={true}>
          <p>Error...</p>
          <Link to="/">Home Page</Link>
        </Paper>
      </AppLayer>
    )
  }
  return (
    <AppLayer>
      <Paper square={true}>
        <p>Setting Page: {data.hello}</p>
        <Link to="/">Home Page</Link>
      </Paper>
    </AppLayer>
  )
}

export default Setting;
