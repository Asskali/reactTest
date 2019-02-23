/* tslint:disable-next-line */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Anime from '../container/Anime';
import Films from '../container/Films';
import Games from '../container/Games';
import Home from '../container/Home';
import TVseries from '../container/TVseries';

function Main() {
  return (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/games" component={Games}/>
        <Route exact path="/anime" component={Anime}/>
        <Route exact path="/films" component={Films}/>
        <Route exact path="/tvseries" component={TVseries}/>
    </Switch>
  );
}

export default Main;
