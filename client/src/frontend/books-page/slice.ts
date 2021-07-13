import { createSlice, createAction } from "@reduxjs/toolkit";
import { BOOKS_TYPE } from "./constants";

export const initialState = { books: null };

const booksSlice = createSlice({
  name: BOOKS_TYPE,
  initialState,
  reducers: {
    getBooks(state, action) {
      const books = action.payload;
      console.log("test", books);

      state.books = books;
    },
  },
});

export const { getBooks } = booksSlice.actions;
export const fetchBooksData = createAction<string>("search__books");

const booksReducers = booksSlice.reducer;

export { booksReducers };
