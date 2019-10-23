import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import '@commonScss/';
import Home from '@comp/home';
import Setting from '@comp/setting';
import Page404 from '@comp/common/page-404';

interface IProps {};
interface IState {};

const AppRoute = (props: IProps, state: IState) => (
  <Router>
    <Switch>
      <Route exact={true} path="/" component={Home} />
      <Route exact={true} path="/setting" component={Setting} />
      <Route component={Page404} />
    </Switch>
  </Router>
)

export default AppRoute;
