import React from 'react';

import Movie from './Movie';

const MoviesList = ({ movies }) => {
	return (
		<div className="movies_list">
			{movies.map(movie => {
				return (
					<div className="movies_list-item" key={movie.imdbID}>
						<Movie
							title={movie.Title}
							year={movie.Year}
							poster={movie.Poster}
							id={movie.imdbID}
						/>
					</div>
				)
			})}
		</div>
	)
};

export default MoviesList;