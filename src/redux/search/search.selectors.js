import { createSelector } from 'reselect';

const selectSearchMovies = state => state.searchMovies;

const selectMoviesResults = createSelector(
  [selectSearchMovies],
  searchMovies => searchMovies.moviesResults
);

export const selectMovies = createSelector(
  [selectMoviesResults],
  moviesResults => moviesResults.Search
);

export const selectSingleMovie = createSelector(
  [selectSearchMovies],
  searchMovies => searchMovies.singleMovie
)