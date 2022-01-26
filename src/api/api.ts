import axios from "axios";

import env from "../environment";

const api = axios.create({
  baseURL: env.api.baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(async (config) => {
  return config;
});

export default api;
