import { createSlice, createAction } from "@reduxjs/toolkit";

const booksSlice = createSlice({
  name: "books",
  initialState: {},
  reducers: {
    setBooks(state, action) {
      const books = action.payload;
      return { ...state, ...books };
    },
  },
});

export const { setBooks } = booksSlice.actions;
export const fetchBooksData = createAction("search__books");

const booksReducers = booksSlice.reducer;

export { booksReducers };
