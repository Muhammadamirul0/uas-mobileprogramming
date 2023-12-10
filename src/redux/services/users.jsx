import api from ".";

export const getUsersAsync = async (req = null) => {
  const params = req
    ? '?' +
      Object.entries(req)
        .filter(([key, value]) => value !== '')
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
        .join('&')
    : '';

  const res = await api.get("/users" + params);
  return res.data;
};