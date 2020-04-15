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
  return response
}, function (err) {
  return Promise.reject(err)
})

export default http