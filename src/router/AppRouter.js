import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../components/Home/Home';
import RedirectPage from '../components/RedirectPage/RedirectPage';
import Dashboard from '../components/Dashboard/Dashboard';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => {

  return (
    <BrowserRouter>
      <div className="main">
        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route path="/redirect" component={RedirectPage} />
          <Route path="/dashboard" component={Dashboard} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;