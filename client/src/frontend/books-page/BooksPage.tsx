import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooksData } from "./slice";
import { getBooksData } from "./selectors";

const BooksPage: React.FC = (): JSX.Element => {
  let { search } = useLocation();
  const dispatch = useDispatch();
  const books = useSelector(getBooksData);

  console.log("test", books);

  useEffect(() => {
    // getData(search);
    dispatch(fetchBooksData(search));
  }, [dispatch, search]);

  return <div>test</div>;
};

export default BooksPage;
