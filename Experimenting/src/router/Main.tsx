/* tslint:disable-next-line */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../container/Home';

function Main() {
  return (
    <Switch>
        <Route path="/*" component={Home}/>
        <Route exact path="/home" component={Home}/>
    </Switch>
  );
}

export default Main;
