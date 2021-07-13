import express from "express";
import bodyParser from "body-parser";
const app = express();
const PORT = process.env.PORT || 5000;
import cors from "cors";
import { booksRoute } from "./routes";

// body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// cors
app.use(cors());

app.use("/books", booksRoute);

app.listen(PORT, () => console.log(`Server running on port:${PORT}`));
