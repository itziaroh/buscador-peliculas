import React from 'react';
import Movie from './Movie';
import { connect } from 'react-redux';

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
						// handleFavs={handleFavs}
						/>
					</div>
				)
			})}
		</div >
	)
};

const mapStateToProps = state => ({
	movies: state.searchMovies.moviesResults
})

export default connect(mapStateToProps)(MoviesList);