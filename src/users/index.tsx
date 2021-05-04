import React from 'react';
import { Route, Switch, RouteComponentProps } from 'react-router-dom';

import FormUser from './FormUser';
import List from './List';

const Users = ({ match }: RouteComponentProps) => {
  const { path } = match;

  return (
    <Switch>
      <Route exact path={path} component={List} />
      <Route path={`${path}/add`} component={FormUser} />
      <Route path={`${path}/edit/:id`} component={FormUser} />
    </Switch>
  );
}

export default Users;