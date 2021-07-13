import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { watchBooks } from "src/frontend/index";
import { booksReducers } from "src/frontend/index";

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  books: booksReducers,
});

const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
});
sagaMiddleware.run(watchBooks);

export default store;
