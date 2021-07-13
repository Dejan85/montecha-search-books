import { takeLatest, call, put } from "redux-saga/effects";
import { setBooks, fetchBooksData } from "./slice";

function* fetchBooksDataGenerator() {
  try {
    const request = fetch("/");
    const url: string = "exams/get";
    // const response: object = yield call(request, url, "GET");
    const response = "";

    yield put(setBooks(response));
  } catch (err) {
    yield console.log("test", err);
  }
}

export default function* watchBooks() {
  yield takeLatest(fetchBooksData.type, fetchBooksDataGenerator);
}
