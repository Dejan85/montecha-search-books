import { createSlice, createAction } from "@reduxjs/toolkit";
import { BOOKS_TYPE } from "./constants";

export const initialState = { books: null, query: null };

const booksSlice = createSlice({
  name: BOOKS_TYPE,
  initialState,
  reducers: {
    getBooks(state, action) {
      const books = action.payload;
      state.books = books;
    },
    setQueryString(state, action) {
      const query = action.payload;
      state.query = query;
    },
  },
});

export const { getBooks, setQueryString } = booksSlice.actions;
export const fetchBooksData = createAction<string>("search__books");
export const setQueryAction = createAction<string>("set__query__string");

const booksReducers = booksSlice.reducer;

export { booksReducers };
