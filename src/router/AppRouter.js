import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import RedirectPage from '../components/RedirectPage/RedirectPage';
import Dashboard from '../components/Dashboard/Dashboard';
import NotFoundPage from '../components/NotFoundPage';
import Login from '../components/Login/Login';

const AppRouter = () => {

  return (
    <BrowserRouter>
      <div className="main">
        <Switch>
          <Route path='/' exact={true} component={Login} />
          <Route path="/redirect" component={RedirectPage} />
          <Route path="/dashboard" component={Dashboard} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;