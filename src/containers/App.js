import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Users from '../components/Users/Users';
import Home from '../components/Home/Home';
import Navbar from '../components/Navigation/Navbar';
import Gigs from '../components/Gigs/Gigs';
import { UserContext } from '../helpers/UserContext';
import { useState, useMemo } from 'react';

function App() {
  const [fav, setFav] = useState(0);
  const value = useMemo(() => ({ fav, setFav }), [fav, setFav]);
  return (
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
          </Switch>
        </div>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
