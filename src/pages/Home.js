import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import SearchForm from '../components/SearchForm';
import MoviesList from '../components/MoviesList';
import { selectMoviesResults } from '../redux/search/search.selectors';


const Home = ({ movies }) => {

	// const renderResults = () => {
	// 	return movies.length === 0
	// 		? <p>No hemos encontrado resultados a su búsqueda</p>
	// 		: <MoviesList movies={movies} />
	// }

	return (
		<div>
			<div className="SearchForm-wrapper">
				<SearchForm />
			</div>
			{movies
				? <MoviesList movies={movies} />
				: <small>Search for your favourites movies, series or videogames</small>
			}
		</div>
	)
}

const mapStateToProps = createStructuredSelector({
	movies: selectMoviesResults
})

export default connect(mapStateToProps)(Home);