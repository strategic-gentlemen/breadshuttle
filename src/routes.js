import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ListRender from './components/lists/ListsRender';
import Login from './components/login/Login';
import Register from './components/register/Register';
import MapView from './components/map/MapView';
// import StoresRender from './components/stores/StoresRender';

export default (
  <Switch>
    {/* <Route exact path='/' component={} /> */}
    <Route exact path='/login' component={Login} />
    <Route exact path='/register' component={Register} />
    <Route exact path='/' component={ListRender} />
    <Route exact path='/map' component={MapView} />
  </Switch>
)