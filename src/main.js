import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import * as api from "./common/api";
import "amfe-flexible";
import "vant/lib/index.css";
import "./assets/style/core.scss";
// import "./assets/style/tailwind.css";
import { version } from "../package.json";
console.log(
  `%c 版本 %c %s %c`,
  "background:#35495e ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff",
  "background:#41b883 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff",
  version,
  "background:transparent"
);

Vue.prototype.$api = api;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
