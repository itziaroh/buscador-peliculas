import { createSelector } from 'reselect';

const selectSearchMovies = state => state.searchMovies;

export const selectMoviesResults = createSelector(
  [selectSearchMovies],
  searchMovies => searchMovies.moviesResults
);

export const selectIsFetching = createSelector(
  [selectSearchMovies],
  searchMovies => searchMovies.isFetching
)