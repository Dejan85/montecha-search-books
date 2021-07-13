import fetch from "node-fetch";

const setQuery = (str: string): string =>
  `search.json?q=${str}&mode=everything`;

const getQuery = (query: string) => {
  const reg: RegExp = /\s/g;

  if (reg.test(query)) {
    const filteredQuery: string = query
      .split(" ")
      .filter((n) => n)
      .join("+");

    return setQuery(filteredQuery);
  }

  return setQuery(query);
};

const searchBooks = async (req: any, res: any) => {
  try {
    const q = getQuery(req.query["?q"]);
    const url = `http://openlibrary.org/${q}`;

    const response = await fetch(url);
    const movies = await response.json();

    res.status(200).json(movies);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const books = { searchBooks };
