// 文档: https://www.kancloud.cn/yunye/axios/234845
import axios from "axios";
import qs from "qs";
import crypto from "./crypto";
import { util, uPop } from "@plugin/tool-common";
import { isPro, isDev } from "./env";
import { mockServer, mockHost, openCrypto, openApiLog } from "@/common/config";

const token = util.Request("token");

let errorFn = status => {
  // 完整错误码参照koa2官网
  let map = {
    400: "请求报文语法错误或参数错误(400)",
    401: "需要通过HTTP认证，或认证失败(401)",
    403: "请求资源被拒绝(403)",
    404: "无法找到请求资源(404)",
    408: "请求超时(408)",
    500: "服务器故障或Web应用故障(500)",
    501: "服务未实现(501)",
    502: "网络错误(502)",
    503: "服务器超负载或停机维护(503)",
    504: "网络超时(504)",
    505: "HTTP版本不受支持(505)"
  };
  if (status) {
    uPop.msg(map[status] || `连接出错(${status})!`);
    return;
  }
  uPop.msg("请连接互联网！");
};

// axios.post全局默认值 "application/x-www-form-urlencoded"
// axios.defaults.headers.post["Content-Type"] = "application/json";
export const http = axios.create({
  // 前后端同站点部署,相对路径,不同站点需要配置baseURL
  baseURL: mockServer ? mockHost : process.env.VUE_APP_BASE_URL,
  timeout: 6000,
  // transformRequest: [
  //   function(data) {
  //     console.log("data: ", data);
  //     // `transformRequest` 允许在向服务器发送前，修改请求数据
  //     // 只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法
  //     return JSON.stringify(data);
  //   }
  // ],
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
    let { url, method, params, data } = config;
    // let token = localStorage.getItem("token");
    // if (token) {
    //   // 与后端约定格式
    //   config.headers["Authorization"] = "Bearer " + (token || "");
    // }

    if (!mockServer) {
      if (openCrypto) {
        if (method === "get") {
          params.token = token;
          url += `?${crypto(qs.stringify(params))}`;
          config.url = url;
          config.params = null;
        } else {
          data.token = token;
          config.data = crypto(data);
        }
      }
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
    if (isDev && openApiLog) {
      console.group(`${config.method.toLocaleUpperCase()}接口: ${config.url}`);
      console.log(data);
      console.groupEnd();
    }
    // 业务层异常
    if (data.code !== 0) {
      config.headers.notoast || uPop.msg(data.msg);
      return Promise.reject(data);
    }
    return data;
  },
  err => {
    console.log("网络错误: ", err.message);
    uPop.msg(err.message);
    return err;
  }
);

export default http;
