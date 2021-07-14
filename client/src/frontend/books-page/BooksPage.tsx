import { useEffect, memo, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooksData, setQueryAction } from "./slice";
import { getBooksData } from "./selectors";
import { Spiner, SubContainer } from "src/ui";
import Book from "./partials/Book";
import { MapBookInterface } from "./types";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";

const resetPageScroll = () => {
  return window.scrollTo(0, 0);
};

const BooksPage: React.FC = (): JSX.Element => {
  let { search }: { search: string } = useLocation();
  const dispatch = useDispatch();
  const { books, query } = useSelector(getBooksData);
  const [page, setPage] = useState(1);

  const onChangePagination = (page: number) => {
    setPage(page);
    resetPageScroll();
  };

  useEffect(() => {
    if (query !== `search.json${search}`) {
      dispatch(fetchBooksData(search));
      dispatch(setQueryAction(`search.json${search}`));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <SubContainer minHeigth="80vh" padding="0 0 20px 0" alignItems="center">
      {(books &&
        books.map(
          (book: MapBookInterface, index: number) =>
            page === book.page && <Book key={index} book={book} />
        )) || <Spiner />}

      {books && (
        <Pagination
          onChange={onChangePagination}
          current={page}
          pageSize={8}
          total={books?.length}
          style={{ margin: "0 auto" }}
        />
      )}
    </SubContainer>
  );
};

export default memo(BooksPage);
