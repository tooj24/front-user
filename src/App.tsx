import React from 'react';
import { Nav } from './components';
import Users from './users';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './home/index';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="app-container bg-light" style={{ minHeight: '100vh' }}>
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

      <ToastContainer position={toast.POSITION.TOP_RIGHT} />
    </div>
  );
};

export default App;
