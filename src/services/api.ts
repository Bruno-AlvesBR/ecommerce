import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

api.interceptors.request.use(config => {
  config.headers = {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
  };

  return config;
});

export default api;
