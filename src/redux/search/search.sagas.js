import { takeLatest, call, put, all } from 'redux-saga/effects';

import SearchActionTypes from "./search.types";
import { searchMoviesSuccess, searchMoviesFailure } from './search.actions';

export function* searchMoviesAsync(action) {
  try {
    const response = yield fetch(`http://www.omdbapi.com/?apikey=590a66a6&s=${action.payload}`);
    const resJson = yield response.json();

    yield put(searchMoviesSuccess(resJson))
  } catch (error) {
    yield put(searchMoviesFailure(error))
  }
};

export function* searchMoviesStart() {
  yield takeLatest(
    SearchActionTypes.SEARCH_MOVIE_START,
    searchMoviesAsync
  )
};

export function* searchSagas() {
  yield all([
    call(searchMoviesStart)
  ])
};