import express from "express";
import { books } from "../controllers";
const { searchBooks } = books;
const booksRoute = express.Router();

booksRoute.get("/search", searchBooks);

export default booksRoute;
