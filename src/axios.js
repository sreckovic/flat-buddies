import axios from "axios";

const instance = axios.create({
  baseURL: "https://flat-buddies.firebaseio.com/"
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
