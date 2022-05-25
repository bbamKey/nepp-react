import instance from ".";

export const registUser = async (data) => {
  try {
    const result = await instance({
      method: "POST",
      url: "/users",
      data,
    });
    return result.data;
  } catch (err) {
    return err.response.data;
  }
};

export const getToken = async (data) => {
  try {
    const result = await instance({
      method: "POST",
      url: "/users/token",
      data,
    });
    return result.data;
  } catch (err) {
    return err.response.data;
  }
};
