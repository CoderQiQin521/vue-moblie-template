// 文档: https://www.kancloud.cn/yunye/axios/234845
import axios from "axios";
const isProduction = process.env.NODE_ENV === "production";
console.log("是否是生产环境", isProduction);
console.log(process.env);

const http = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
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
      console.log(`%c 接口地址: ${response.config.url}`, "background:yellow", response.data);
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
