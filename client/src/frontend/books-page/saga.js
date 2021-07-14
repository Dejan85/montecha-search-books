import { takeLatest, call, put } from "redux-saga/effects";
import {
  getBooks,
  setQueryString,
  fetchBooksData,
  setQueryAction,
} from "./slice";
import { request } from "src/utils";

function* fetchBooksDataGenerator(action) {
  try {
    yield put(getBooks(null));
    const q = action.payload;
    const url = `/books/search${q}`;

    const response = yield call(request, url, "GET");
    yield put(getBooks(response));
  } catch (err) {
    yield console.log("test", err);
  }
}

function* queryStringGenerator(action) {
  try {
    const query = action.payload;
    yield put(setQueryString(query));
  } catch (err) {
    yield console.log("test", err);
  }
}

export default function* watchBooks() {
  yield takeLatest(fetchBooksData.type, fetchBooksDataGenerator);
  yield takeLatest(setQueryAction.type, queryStringGenerator);
}
