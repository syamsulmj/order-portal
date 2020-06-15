import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import Home from '../components/home/Home';

const Router = () => {
  return (
    <Switch>
      <Route path="/" component={ Home } exact />
    </Switch>
  )
}

export default Router;
