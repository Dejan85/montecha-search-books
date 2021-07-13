import { useEffect, memo } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooksData, setQueryAction } from "./slice";
import { getBooksData } from "./selectors";

const BooksPage: React.FC = (): JSX.Element => {
  let { search } = useLocation();
  const dispatch = useDispatch();
  const { books, query } = useSelector(getBooksData);

  useEffect(() => {
    if (query !== `search.json${search}`) {
      dispatch(fetchBooksData(search));
      dispatch(setQueryAction(`search.json${search}`));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return <div>test</div>;
};

export default memo(BooksPage);
