import api from "./api";

// USER SIGNUP
export const signupUser = async (data) => {
  const res = await api.post("/users/signup", data);
  return res.data;
};

// USER LOGIN
export const loginUser = async (data) => {
  const res = await api.post("/users/login", data);
  return res.data;
};
