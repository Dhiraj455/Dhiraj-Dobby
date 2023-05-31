import axios from "axios";
// const axios = require("axios").default;

let url = "https://dhiraj-dobby1.onrender.com"

export const register = async (form) => {
  return await axios.post(`https://dhiraj-dobby1.onrender.com/register`, form, {
    headers: { "Content-Type": "application/json" },
  });
};

export const login = async (form) => {
  return await axios.post(`https://dhiraj-dobby1.onrender.com/login`, form, {
    headers: { "Content-Type": "application/json" },
  });
};

export const Logout = async () => {
  return await axios.get(`https://dhiraj-dobby1.onrender.com/logout`, {
    headers: { "Content-Type": "application/json" },
  });
};
