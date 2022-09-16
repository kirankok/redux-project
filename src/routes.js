import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import NoMatch from './components/NoMatch';
import RandomQuote from './components/RandomQuote/RandomQuote';
import UserDetails from './components/UserDetails';

export const AppRoutes = () => {

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path={'/'} exact component={RandomQuote} />
        <Route path={'/user-details'} component={UserDetails} />
        <Route path="*" component={NoMatch} />
      </Switch>
    </BrowserRouter>
  )
}