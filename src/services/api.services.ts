import axios from "axios";

const api = axios.create({
  baseURL: String(process.env.VITE_API_URL),
  timeout: 3000,
  headers: { "X-Custom-Header": "foobar" },
});

export { api };
