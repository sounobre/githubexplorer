import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Repository from '../pages/Repository/index';
import Dashboard from '../pages/Dasboard/index';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/repository" component={Repository} />
  </Switch>
);

export default Routes;
