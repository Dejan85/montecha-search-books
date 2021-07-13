import { takeLatest, call, put } from "redux-saga/effects";
import { getBooks, fetchBooksData } from "./slice";
import { request } from "src/utils";

function* fetchBooksDataGenerator(action) {
  try {
    const query = action.payload;
    const url = `/books/search${query}`;
    const response = yield call(request, url, "GET");

    yield put(getBooks(response));
  } catch (err) {
    yield console.log("test", err);
  }
}

export default function* watchBooks() {
  yield takeLatest(fetchBooksData.type, fetchBooksDataGenerator);
}
