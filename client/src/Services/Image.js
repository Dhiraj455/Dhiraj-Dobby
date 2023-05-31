import axios from "axios";

export const uploadImage = async (form) => {
  return await axios.post(`/postImage`, form, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export const getUserImages = async (search) => {
  return await axios.get(`/getUserImages?search=${search}`);
}