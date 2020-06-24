import React from 'react';
import { Grid, Box } from '@chakra-ui/core';

import Movie from './Movie';


const MoviesList = ({ movies }) => {
	return (
		<Grid
			rowGap={25}
			columnGap={20}
			templateColumns={["1fr", "1fr", "1fr 1fr", "1fr 1fr 1fr"]}
			mx={4}
			justifyItems="center"
			alignItems="center"
		>
			{movies.map(movie => {
				return (
					<Box key={movie.imdbID}>
						<Movie
							title={movie.Title}
							year={movie.Year}
							poster={movie.Poster}
							id={movie.imdbID}
						/>
					</Box>
				)
			})}
		</Grid>
	)
};

export default MoviesList;