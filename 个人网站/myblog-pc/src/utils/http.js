import axios from 'axios';
import store from '../store'
import app from '../main'
const instance = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 60000,
    data:{}
});

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    let token = localStorage.getItem('mytoken');
    config.headers["Authorization"] = "Bearer " + token;
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});


//添加响应拦截器
instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    let {status} = error.response;
    if(status == 401){
        store.dispatch('logOut');
        app.$router.push('/login');
    }
    return Promise.reject(error);
  });

export default instance