import axios, { AxiosRequestConfig } from "axios";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "302ea9682370438d9b02bd7b0cb2fe1c",
  },
});

class ApiClient<T> {
  endpoint: string;

  constructor(endpoit: string) {
    this.endpoint = endpoit;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance.get<FetchResponse<T>>(this.endpoint, config)
      .then(res => res.data);
  }
}

export default ApiClient;