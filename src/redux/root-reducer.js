import { combineReducers } from 'redux';
import searchMoviesReducer from './search/search.reducer';

export default combineReducers({
  searchMovies: searchMoviesReducer
})