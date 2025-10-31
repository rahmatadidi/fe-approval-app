import axios from "axios";
import { getToken } from "@/utils/token";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000/api",
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use((config) => {
  const token = getToken();
  console.log("Token FE:", getToken());

  if (token && config.headers) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default api;
