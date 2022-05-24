import instance from ".";

export const registUser = (data) => {
  instance({
    method: "POST",
    url: "/users",
    data,
  });
};
