import { lazy, Suspense, useMemo, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import { UserContext } from '../../helpers/UserContext';
import ErrorBoundary from '../Error/Error';
const Home = lazy(() => import('../../components/Home/Home'));
const Users = lazy(() => import('../../components/Users/Users'));
const Gigs = lazy(() => import('../../components/Gigs/Gigs'));
const Navbar = lazy(() => import('../../components/Navigation/Navbar'));
const Favs = lazy(() => import('../../components/Favs/Favs'));

export default function Routes() {
  const [fav, setFav] = useState([]);
  const value = useMemo(() => ({ fav, setFav }), [fav, setFav]);
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loader />}>
        <Router>
          <UserContext.Provider value={value}>
            <div>
              <Navbar className='col-3' />
            </div>

            <div className='container col-8'>
              <Switch>
                <Route exact path='/'>
                  <Home />
                </Route>
                <Route path='/users'>
                  <Users />
                </Route>
                <Route path='/gigs'>
                  <Gigs />
                </Route>
                <Route path='/favs'>
                  <Favs />
                </Route>
              </Switch>
            </div>
          </UserContext.Provider>
        </Router>
      </Suspense>
    </ErrorBoundary>
  );
}
