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
      results: [],
      usedSearch: false
    }
    this.handleResults = this.handleResults.bind(this);
    this.renderResults = this.renderResults.bind(this);
  }

  handleResults(results) {
    this.setState({ results, usedSearch: true })
  }

  renderResults() {
    return this.state.results.length === 0
      ? <p>No hemos encontrado resultados a su búsqueda</p>
      : <MoviesList movies={this.state.results} />
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
        {this.state.usedSearch
          ? this.renderResults()
          : <small>Introduzca un título</small>
        }
      </div>
    )
  }
}
export default App;
