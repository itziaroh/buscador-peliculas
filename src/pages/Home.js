import React from 'react';
import SearchForm from '../components/SearchForm';
import MoviesList from '../components/MoviesList';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [],
            usedSearch: false,
            favs: []
        }
        this.handleResults = this.handleResults.bind(this);
        this.renderResults = this.renderResults.bind(this);
        this.handleFavs = this.handleFavs.bind(this);
    }

    handleResults(results) {
        this.setState({ results, usedSearch: true })
    }

    renderResults() {
        return this.state.results.length === 0
            ? <p>No hemos encontrado resultados a su búsqueda</p>
            : <MoviesList movies={this.state.results} />
    }

    handleFavs(favData) {
        // this.setState({ favs: [...this.state.favs, favData] })
        console.log(favData)
    }

    render() {
        return (
            <div>
                <div className="SearchForm-wrapper">
                    <SearchForm
                        onResults={this.handleResults}
                    />
                </div>
                {this.state.usedSearch
                    ? this.renderResults()
                    : <small>Search for your favourites movies, series or videogames</small>
                }
            </div>
        )
    }

}

export default Home;