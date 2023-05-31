import axios from "axios";

export const uploadImage = async (form) => {
  return await axios.post(`/postImage`, form, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};
