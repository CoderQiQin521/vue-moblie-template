// 文档: https://www.kancloud.cn/yunye/axios/234845
import axios from "axios";
import { Toast } from "vant";
import { isPro, isDev } from "../common/env";
console.log("是否是生产环境", isDev);

let errorFn = status => {
  // 完整错误码参照koa2官网
  let map = {
    400: "请求错误(400)",
    401: "未授权，请重新登录(401)",
    403: "拒绝访问(403)",
    404: "请求出错(404)",
    408: "请求超时(408)",
    500: "服务器错误(500)",
    501: "服务未实现(501)",
    502: "网络错误(502)",
    503: "服务不可用(503)",
    504: "网络超时(504)",
    505: "HTTP版本不受支持(505)"
  };
  if (status) {
    Toast.fail(map[status] || `连接出错(${status})!`);
    return;
  }
  Toast.fail("请连接互联网！");
};

// axios.post全局默认值
// axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
const http = axios.create({
  // 前后端同站点部署,相对路径,不同站点需要配置baseURL
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 6000,
  validateStatus: function(status) {
    // 网络层异常: 监听http错误码处理
    if (!(status >= 200 && status < 300)) {
      errorFn(status);
    }
    return status >= 200 && status < 300;
  }
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
    let { config, data } = response;
    if (isDev) {
      console.group(`接口地址: ${config.url}`);
      console.log(data);
      // console.log(`%c 接口地址: ${response.config.url}`, "background:yellow", response.data);
      console.groupEnd();
    }
    // 业务层异常
    if (data.code !== 0) {
      // todo: 业务异常toast提醒,还需配置显示/隐藏flag
      Toast.fail(data.msg);
      return Promise.reject(data);
    }
    return data;
  },
  err => {
    console.log("网络错误: ", err.message);
    return err;
  }
);

export default http;
