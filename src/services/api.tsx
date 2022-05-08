import axios from "axios";

const api = axios.create({
  baseURL: "https://62726e5d25fed8fcb5f421f3.mockapi.io/api",
});

export default api;
