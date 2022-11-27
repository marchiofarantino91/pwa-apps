import axios from 'axios'
import store from '../store'

const service = axios.create({
    baseURL: 'https://dummyjson.com',
    timeout:50000
})

// Add a request interceptor
service.interceptors.request.use(function (config) {
    // Do something before request is sent
    config.headers['Content-Type'] = 'application/json'
    // config.headers['Content-Type'] = 'multipart/form-data'
    // config.headers['Content-Type'] = 'application/form-data'

    if (store.getters.token) { 
      config.headers['Authorization'] = 'Bearer ' + localStorage.getItem('Token')
    }  
    return config
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
service.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });

export default service