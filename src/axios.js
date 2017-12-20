import axios from "axios";
import config from "./config";

const instance = axios.create({
  baseURL: config.baseURL ? config.baseURL : null
});

instance.interceptors.request.use(
  request => {
    // Edit request config
    // console.log(request);
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
    // console.log(response);
    return response;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);

export default instance;
