import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "amfe-flexible";
import * as api from "./global/apis";
// import "vant/lib/index.css";
// import "./assets/style/tailwind.css";
import "./assets/style/core.scss";

Vue.prototype.$api = api;
Vue.config.productionTip = false;

// 小齿轮出现环境: 本地调试,线测,ab
if (
  window.location.host.includes("192") ||
  window.location.host.includes(".test.") ||
  window.location.host.includes("ab-")
) {
  eruda.init();
}
console.log("环境变量:", process.env);

import "@/global/version";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
