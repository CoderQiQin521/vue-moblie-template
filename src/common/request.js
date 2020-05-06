import axios from 'axios'

const http = axios.create(
  {
    baseURL: '',
    timeout: 6000
  }
)

http.interceptors.request.use(function (config) {
  return config
}, function (err) {
  return Promise.reject(err)
})

http.interceptors.response.use(function (response) {
  if (process.env.NODE_ENV === 'development') {
    console.log(`接口地址: ${response.config.url}`, response.data);
  }
  return response
}, function (err) {
  return Promise.reject(err)
})

export default http