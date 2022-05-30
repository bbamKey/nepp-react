import instance from ".";

export const getPosts = async (data) => {
  const result = await instance({
    method: "GET",
    url: "/posts",
    data,
  });
  return result.data;
};

export const postPosts = async ({ file, content }) => {
  const data = new FormData();
  data.append("file", file);
  data.append("content", content);

  const result = await instance({
    method: "POST",
    url: "/posts",
    data,
  });
  return result.data;
};
