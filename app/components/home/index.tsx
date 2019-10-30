import React, { useEffect } from 'react';

import AppLayer from '@con/app-layer';
import List from './list';

interface IProps {
  window?: () => Window,
};
interface IState {};

const Home = (props: IProps, state: IState) => {

  useEffect(() => {
    // console.log('home props: ', props);
  });

  return (
    <AppLayer>

      <List title="推荐视频" />

    </AppLayer>
  )
}

export default Home;
