import logger from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';

import rootSaga from './root-saga';
import rootReducer from "./root-reducer";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger)
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);
