import axios from 'axios';
const instance = axios.create({
  timeout: 30 * 1000,
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  baseURL: 'http://150.158.75.148/api/'
});

// 自定义axios拦截器 响应
instance.interceptors.response.use(
  function (response) {
    // 2xx 范围内响应码会进到这里
    return Promise.resolve(response.data);
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default instance;
