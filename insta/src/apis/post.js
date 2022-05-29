import instance from ".";

export const getPosts = async (data) => {
  const result = await instance({
    method: "GET",
    url: "/posts",
    data,
  });
  return result.data;
};
