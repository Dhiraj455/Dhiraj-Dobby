import axios from "axios";
// const axios = require("axios").default;

export const register = async (form) => {
  // return await axios({
  //   method: "POST",
  //   url: `${url}/register`,
  //   data: form,
  //   headers: { "Content-Type": "application/json" },
  // })
  return await axios.post(`/register`, form, {
    headers: { "Content-Type": "application/json" },
  });
};

export const login = async (form) => {
  // return await axios({
  //   method: "POST",
  //   url: `${url}/login`,
  //   data: form,
  //   headers: { "Content-Type": "application/json" },
  // })
  return await axios.post(`/login`, form, {
    headers: { "Content-Type": "application/json" },
  });
};
