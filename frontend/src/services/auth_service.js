// frontend/src/services/auth_service.js
import API from "./api";

export const adminLogin = (email, password) => {
  return API.post("/admin/login", { email, password });
};
