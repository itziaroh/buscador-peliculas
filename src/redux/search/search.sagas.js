import { takeLatest, call, put, all } from 'redux-saga/effects';

import SearchActionTypes from "./search.types";
import { searchMoviesSuccess, searchMoviesFailure, searchByIdSuccess, searchByIdFailure } from './search.actions';

export function* searchMoviesAsync(action) {

  try {
    const searchText = action.payload;
    const response = yield fetch(`https://www.omdbapi.com/?apikey=590a66a6&s=${searchText}`);
    const resJson = yield response.json();

    yield put(searchMoviesSuccess(resJson))
  } catch (error) {
    yield put(searchMoviesFailure(error))
  }
};

export function* searchMovieByIdAsync(action) {
  try {
    const id = action.payload;
    const response = yield fetch(`https://www.omdbapi.com/?apikey=590a66a6&i=${id}`);
    const resJson = yield response.json();

    yield put(searchByIdSuccess(resJson))
  } catch (error) {
    yield put(searchByIdFailure(error))
  }
}

export function* searchMoviesStart() {
  yield takeLatest(
    SearchActionTypes.SEARCH_MOVIE_START,
    searchMoviesAsync
  )
};

export function* searchMovieByIdStart() {
  yield takeLatest(
    SearchActionTypes.SEARCH_BY_ID_START,
    searchMovieByIdAsync
  )
}

export function* searchSagas() {
  yield all([
    call(searchMoviesStart),
    call(searchMovieByIdStart)
  ])
};