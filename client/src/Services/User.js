import axios from "axios";
// const axios = require("axios").default;

export const register = async (form) => {
  return await axios.post(`/register`, form, {
    headers: { "Content-Type": "application/json" },
  });
};

export const login = async (form) => {
  return await axios.post(`/login`, form, {
    headers: { "Content-Type": "application/json" },
  });
};

export const Logout = async () => {
  return await axios.get(`/logout`, {
    headers: { "Content-Type": "application/json" },
  });
};
