import axios, { AxiosInstance } from 'axios';

class BaseApi {
  protected api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_URL,
    });

    this.api.interceptors.request.use(config => {
      config.headers = {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
      };

      return config;
    });
  }
}

export { BaseApi };
