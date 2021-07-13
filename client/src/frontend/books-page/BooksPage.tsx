import { useEffect } from "react";
import { useLocation } from "react-router-dom";

async function getData(query: string) {
  const url = `/books/search?${query}`;
  const response = await fetch(url);
  const movies = await response.json();

  console.log("test movies", movies);
}

const BooksPage: React.FC = (): JSX.Element => {
  let { search } = useLocation();

  useEffect(() => {
    getData(search);
  }, [search]);

  return <div>test</div>;
};

export default BooksPage;
