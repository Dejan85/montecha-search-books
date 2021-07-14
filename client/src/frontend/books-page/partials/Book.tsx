import { useEffect, useState } from "react";
import { BookPropsInterface } from "../types";
import { P, Image, BookContainer, SubContainer } from "src/ui";

const Books: React.FC<BookPropsInterface> = ({
  book: { author, edition, firstPublish, imgIsbn, lang, title },
}): JSX.Element => {
  const [imageUrl, setImageUrl] = useState<string>();

  useEffect(() => {
    if (imgIsbn) {
      const url = `https://openlibrary.org/api/books?bibkeys=ISBN:${imgIsbn}&format=json`;
      const fetchImg = async () => {
        const res = await fetch(url);
        const response = await res.json();
        const imgUrl = response[`ISBN:${imgIsbn}`];
        setImageUrl(imgUrl?.thumbnail_url?.replace("-S", "-L") || null);
      };

      fetchImg();
    }
  }, []);

  return (
    <BookContainer>
      <Image src={imageUrl} alt={title[0]} />
      <SubContainer>
        <P weight="bold" size="30px">
          {title}
        </P>
        <P size="30px">by {author}</P>
        <P color="#837979ad">First published in {firstPublish} </P>
        <P color="#837979ad">
          {edition} edition in {lang?.length} languages
        </P>
      </SubContainer>
    </BookContainer>
  );
};

export default Books;
