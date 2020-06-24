import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MovieDetail from '../pages/MovieDetail';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Navbar from './Navbar';
import Favs from '../pages/Favs';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/detail/:id' component={MovieDetail} />
          <Route path='/favs' component={Favs} />
          <Route path='/notfound' component={NotFound} />
        </Switch>
      </div>
    )
  }
}
export default App;
