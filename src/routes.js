import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import NavBar from './components/NavBar/NavBar';
import NoMatch from './components/NoMatch';


export const AppRoutes = () => {

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route path="*" component={NoMatch} />
      </Switch>
    </BrowserRouter>
  )
}