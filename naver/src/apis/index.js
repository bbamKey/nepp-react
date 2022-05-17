import axios from "axios";

export const getMovies = async (query) => {
  const result = await axios.get("/v1/search/movie.json", {
    headers: {
      "X-Naver-Client-Id": "y1zcp2EQtTmL2Z7B2PGv",
      "X-Naver-Client-Secret": "ZDEqwYWQII",
    },
    params: { query },
  });

  return result.data;
};
