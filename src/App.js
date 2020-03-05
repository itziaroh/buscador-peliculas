import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './styles/App.css';
import 'bulma/css/bulma.css';
import MovieDetail from './pages/MovieDetail';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/detail/:id' component={MovieDetail} />
          <Route component={NotFound} />
        </Switch>
      </div>
    )
  }
}
export default App;
