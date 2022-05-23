import axios from "axios";

const instance = axios.create({
  headers: {
    "X-Naver-Client-Id": "y1zcp2EQtTmL2Z7B2PGv",
    "X-Naver-Client-Secret": "ZDEqwYWQII",
  },
});

export const getMovies = async (params) => {
  const result = await instance.get("/v1/search/movie.json", {
    params,
  });

  return result.data;
};

export const getBooks = async (params) => {
  const result = await instance.get("/v1/search/book.json", {
    params,
  });

  return result.data;
};

export const getBookdetail = async (params) => {
  const result = await instance.get("/v1/search/book_adv.json", {
    params,
  });

  return result.data;
};
