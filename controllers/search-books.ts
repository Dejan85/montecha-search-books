import fetch from "node-fetch";

const setQuery = (str: string): string => `search.json?q=${str}`;

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

const fetchBooks = async (q: string) => {
  const url = `http://openlibrary.org/${q}`;
  const response = await fetch(url);
  const books = await response.json();

  return books;
};

const searchBooks = async (req: any, res: any) => {
  try {
    const q = getQuery(req.query.q);
    const booksResponse = await fetchBooks(q);
    let counter = 1;
    let page = 1;

    const books = booksResponse?.docs.map((book: any) => {
      counter++;
      if (counter === 6) {
        counter = 1;
        page++;
      }

      return {
        title: book.title,
        author: book.author_name,
        firstPublish: book.first_publish_year,
        edition: book.edition_count,
        lang: book.language,
        imgIsbn: book.isbn && book.isbn[0],
        page,
      };
    });

    res.status(200).json(books);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const books = { searchBooks };
