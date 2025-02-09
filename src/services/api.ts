import axios from "axios";

const API_URL = "http://127.0.0.1:8000";

export const getBooks = async (genre: string) => {
  const response = await axios.get(`${API_URL}/books/${genre}`);
  return response.data;
};
