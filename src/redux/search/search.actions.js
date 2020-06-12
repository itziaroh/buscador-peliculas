import SearchActionTypes from "./search.types";

export const searchMoviesStart = searchText => ({
  type: SearchActionTypes.SEARCH_MOVIE_START,
  payload: searchText
});

export const searchMoviesSuccess = movies => ({
  type: SearchActionTypes.SEARCH_MOVIE_SUCCESS,
  payload: movies
});

export const searchMoviesFailure = error => ({
  type: SearchActionTypes.SEARCH_MOVIE_FAILURE,
  payload: error
});

export const searchByIdStart = id => ({
  type: SearchActionTypes.SEARCH_BY_ID_START,
  payload: id
});

export const searchByIdSuccess = movie => ({
  type: SearchActionTypes.SEARCH_BY_ID_SUCCESS,
  payload: movie
});

export const searchByIdFailure = error => ({
  type: SearchActionTypes.SEARCH_BY_ID_FAILURE,
  payload: error
})