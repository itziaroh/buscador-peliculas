import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import Title from './components/Title';
import SearchForm from './components/SearchForm';
import MoviesList from './components/MoviesList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    }
    this.handleResults = this.handleResults.bind(this);
  }

  handleResults(results) {
    this.setState({ results })
  }

  render() {
    return (
      <div className="App">
        <Title>BUSCADOR DE PELICULAS</Title>
        <div className="SearchForm-wrapper">
          <SearchForm
            onResults={this.handleResults}
          />
        </div>
        {this.state.results.length === 0
          ? <p>Sin resultados</p>
          : <MoviesList movies={this.state.results} />
        }
      </div>
    )
  }
}
export default App;
