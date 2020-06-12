import SearchActionTypes from "./search.types";

const INITIAL_STATE = {
	searchText: '',
	moviesResults: [],
	isFetching: false,
	errorMessage: undefined,
	movieId: '',
	singleMovie: {}
}

const searchMoviesReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SearchActionTypes.SEARCH_MOVIE_START:
			return {
				...state,
				isFetching: true,
				searchText: action.payload
			}
		case SearchActionTypes.SEARCH_MOVIE_SUCCESS:
			return {
				...state,
				moviesResults: action.payload,
				isFetching: false,
				searchText: ''
			}
		case SearchActionTypes.SEARCH_MOVIE_FAILURE:
			return {
				...state,
				isFetching: false,
				errorMessage: action.payload,
				searchText: ''
			}
		case SearchActionTypes.SEARCH_BY_ID_START:
			return {
				...state,
				isFetching: true,
				movieId: action.payload
			}
		case SearchActionTypes.SEARCH_BY_ID_SUCCESS:
			return {
				...state,
				isFetching: false,
				movieId: '',
				singleMovie: action.payload
			}
		case SearchActionTypes.SEARCH_BY_ID_FAILURE:
			return {
				...state,
				isFetching: false,
				movieId: '',
				errorMessage: action.payload,
			}
		default:
			return state;
	}
}

export default searchMoviesReducer;