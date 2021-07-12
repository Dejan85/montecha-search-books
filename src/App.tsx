import React, { useEffect, useState } from "react";
import { SearchPage } from "src/frontend";

const App: React.FC = (): JSX.Element => {
  const [movies, setMovies] = useState();

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "http://openlibrary.org/search.json?q=star+wars"
      );
      const movies = await response.json();

      console.log("test movies", movies);

      setMovies(movies);
    }

    getData();
  }, []);

  console.log("test state movies", movies);

  return (
    <div>
      <SearchPage />
    </div>
  );
};

export default App;
