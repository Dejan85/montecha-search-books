import { initialState } from "./slice";
import { BOOKS_TYPE } from "./constants";

export const getBooksData = (state: any) => state["books"] || initialState;
