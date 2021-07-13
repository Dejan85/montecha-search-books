export const request = async (urlProp: string) => {
  const url = `${process.env.REACT_APP_API_URL}${urlProp}`;
  return await fetch(url).then((res) => res.json());
};
