import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import Title from './components/Title';
import SearchForm from './components/SearchForm';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Title>BUSCADOR DE PELICULAS</Title>
        <div className="SearchForm-wrapper">
          <SearchForm />
        </div>
      </div>
    );
  }
}

export default App;
