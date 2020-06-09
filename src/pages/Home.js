import React from 'react';
import { useSelector } from 'react-redux';

import SearchForm from '../components/SearchForm';
import MoviesList from '../components/MoviesList';
import { selectMovies } from '../redux/search/search.selectors';


const Home = () => {

	const movies = useSelector(selectMovies);

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
};

export default Home;