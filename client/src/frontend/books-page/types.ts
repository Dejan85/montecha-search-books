export interface MapBookInterface {
  author: string[];
  edition: number;
  firstPublish: number;
  imgIsbn: string;
  lang: string[];
  title: string;
  page: number;
}

export interface BookPropsInterface {
  book: MapBookInterface;
}
