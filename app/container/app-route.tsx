import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import '@commonScss/';
import Home from '@comp/home';
import Video from '@comp/video';
import Album from '@comp/album';
import My from '@comp/my';
import Setting from '@comp/setting';
import Page404 from './page-404';

interface IProps {};
interface IState {};

const AppRoute = (props: IProps, state: IState) => (
  <Router>
    <Switch>
      <Route exact={true} path="/" component={Home} />
      <Route exact={true} path="/video" component={Video} />
      <Route exact={true} path="/album" component={Album} />
      <Route exact={true} path="/my" component={My} />
      <Route exact={true} path="/setting" component={Setting} />
      <Route component={Page404} />
    </Switch>
  </Router>
)

export default AppRoute;
