import axios from 'axios';

const instance = axios.create({
  baseURL: "https://my-json-server.typicode.com/sreckovic/flat-buddies"
});

instance.interceptors.request.use(
  request => {
    console.log(request);
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
    console.log(response);
    // Edit request config
    return response;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);

export default instance;