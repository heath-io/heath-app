import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

interface IProps {};
interface IState {};

const Page404 = (props: IProps, state: IState) => {

  useEffect(() => {
    console.log('page404 props: ', props);
  }, []);

  return (
    <div>
      <p>Page Not Found!</p>
      <Link to="/">Home Page</Link>
    </div>
  )
}

export default Page404;
