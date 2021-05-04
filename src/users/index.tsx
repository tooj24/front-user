import React from 'react';
import { Route, Switch } from 'react-router-dom';

import FormUser from './FormUser';
import List from './List';

const Users = () => {

  return (
    <Switch>
      <Route exact path="/users" component={List} />
      <Route path="/users/add" component={FormUser} />
      <Route path="users/edit/:id" component={FormUser} />
    </Switch>
  );
}

export default Users;