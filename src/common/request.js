// 文档: https://www.kancloud.cn/yunye/axios/234845
import axios from "axios";

const http = axios.create({
  baseURL: "",
  timeout: 6000
});

http.interceptors.request.use(
  config => {
    let token = localStorage.getItem("token");
    if (token) {
      // 与后端约定格式
      config.headers["Authorization"] = "Bearer " + (token || "");
    }
    return config;
  },
  err => {
    return err;
  }
);

http.interceptors.response.use(
  response => {
    if (process.env.NODE_ENV === "development") {
      console.log(`接口地址: ${response.config.url}`, response.data);
    }
    if (response.data.code !== 0) {
      // todo: toast提醒
      return response.data;
    }
    return response.data;
  },
  err => {
    return err;
  }
);

export default http;
