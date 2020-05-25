import axios from "axios";

const http = axios.create({
  baseURL: "",
  timeout: 6000,
});

http.interceptors.request.use(
  function (config) {
    let token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = "Bearer " + (token || "");
    }
    return config;
  },
  function (err) {
    return err;
  }
);

http.interceptors.response.use(
  function (response) {
    if (process.env.NODE_ENV === "development") {
      console.log(`接口地址: ${response.config.url}`, response.data);
    }
    if (response.data.code !== 0) {
      // todo: toast提醒
      return response.data;
    }
    return response.data;
  },
  function (err) {
    return err;
  }
);

export default http;
