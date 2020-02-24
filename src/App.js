import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import Title from './components/Title';
import SearchForm from './components/SearchForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    }
    this.handleResults = this.handleResults.bind(this);
    this.renderResults = this.renderResults.bind(this);
  }

  handleResults(results) {
    this.setState({ results })
  }

  renderResults() {
    const { results } = this.state
    return results.map(movie => {
      return <p key={movie.imdbID}>{movie.Title}</p>
    })
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
          : this.renderResults()
        }
      </div>
    );
  }
}

export default App;
