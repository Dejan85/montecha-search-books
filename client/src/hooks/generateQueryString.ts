const setQuery = (str: string): string => `search.json?q=${str}`;

export const useGenerateQueryString = () => {
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

  return { getQuery };
};
