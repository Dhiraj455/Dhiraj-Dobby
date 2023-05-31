import axios from "axios";
// const axios = require("axios").default;

let url = "https://dhiraj-dobby1.onrender.com"

export const register = async (form) => {
  return await axios.post(`${url}/register`, form, {
    headers: { "Content-Type": "application/json" },
  });
};

export const login = async (form) => {
  return await axios.post(`${url}/login`, form, {
    headers: { "Content-Type": "application/json" },
  });
};

export const Logout = async () => {
  return await axios.get(`${url}/logout`, {
    headers: { "Content-Type": "application/json" },
  });
};
