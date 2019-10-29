import React from 'react';
import { Link } from 'react-router-dom';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { Paper } from '@material-ui/core';

const GetHello = gql`
  query {
    hello
  }
`;

const Setting = () => {

  const { loading, error, data } = useQuery(GetHello);
  if(loading) {
    return (
      <Paper square={true}>
        <p>Loading...</p>
      </Paper>
    )
  }
  if(error) {
    return (
      <Paper square={true}>
        <p>Error...</p>
        <Link to="/">Home Page</Link>
      </Paper>
    )
  }
  return (
    <Paper square={true}>
      <p>Setting Page: {data.hello}</p>
      <Link to="/">Home Page</Link>
    </Paper>
  )
}

export default Setting;
