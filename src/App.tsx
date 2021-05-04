import React from 'react';
import { Nav } from './components';
import Users from './users';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './home/index';

const App = () => {
  return (
    <div className="app-container bg-light">
      <BrowserRouter>
        <Nav />
        {/* <Alert /> */}
        <div className="container pt-4 pb-4">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/users" component={Users} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
