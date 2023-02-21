import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_API || "http://localhost:8080";

const api = axios.create({
  baseURL: baseUrl,
  timeout: 1000,
  headers: {},
});

export { api };
