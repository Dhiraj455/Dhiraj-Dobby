import axios from "axios";

export const uploadImage = async (form) => {
  // return await axios.post(`/postImage`, form, {
  //   headers: { "Content-Type": "multipart/form-data" },
  // });
  return await axios.post(`/postImage`, form, {
    header: { "Content-Type": "multipart/form-data" },
  });
};

export const getUserImages = async (search) => {
  return await axios.get(`/getUserImages?search=${search}`, {
    headers: { "Content-Type": "application/json" },
  });
}