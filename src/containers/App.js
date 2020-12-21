import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Users from '../components/Users/Users';
import Home from '../components/Home/Home';
import Navbar from '../components/Navigation/Navbar';
import Gigs from '../components/Gigs/Gigs';

function App() {
  return (
    <Router>
      <Navbar />
      <div className='container'>
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
    </Router>
  );
}

export default App;
