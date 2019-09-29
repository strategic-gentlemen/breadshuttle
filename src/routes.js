import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ListRender from './components/lists/ListsRender';
import Login from './components/login/Login';
import Register from './components/register/Register';
import MapView from './components/map/MapView';
import Profile from './components/users/Profile';
import EditList from './components/lists/EditList';
import AddList from './components/lists/AddList';
// import StoresRender from './components/stores/StoresRender';

export default (
  <Switch>
    <Route exact path='/' component={ListRender} />
    <Route exact path='/profile' component={Profile} />
    <Route exact path='/login' component={Login} />
    <Route exact path='/register' component={Register} />
    <Route exact path='/map/:id' component={MapView} />
    <Route exact path='/edit-list/:id' component={EditList} />
    <Route exact path='/add-list' component={AddList} />
  </Switch>
)