import axios from "axios";
import config from "./config";

console.log(config);

const instance = axios.create({
  baseURL: config.baseURL
});

instance.interceptors.request.use(
  request => {
    // Edit request config
    return request;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  response => {
    // Edit request config
    return response;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);

export default instance;
