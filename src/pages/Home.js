import React from 'react';
import { useSelector } from 'react-redux';
import { Flex, Text } from '@chakra-ui/core';

import SearchForm from '../components/SearchForm';
import MoviesList from '../components/MoviesList';
import { selectMovies } from '../redux/search/search.selectors';

const Home = () => {

	const movies = useSelector(selectMovies);

	return (
		<div>
			<Flex justify="center" pt={21} pb={5}>
				<SearchForm />
			</Flex>
			{movies
				? <MoviesList movies={movies} />
				: <Text fontSize="sm">Search for your favourites movies, series or videogames</Text>
			}
		</div>
	)
};

export default Home;