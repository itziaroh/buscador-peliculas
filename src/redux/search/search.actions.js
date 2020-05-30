export const searchMoviesStart = searchText => ({
  type: 'SEARCH_MOVIE_START',
  payload: searchText
});

export const searchMoviesSuccess = movies => ({
  type: 'SEARCH_MOVIE_SUCCESS',
  payload: movies
});

export const searchMoviesFailure = error => ({
  type: 'SEARCH_MOVIE_FAILURE',
  payload: error
});