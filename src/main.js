import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import * as api from "./common/api";
import "amfe-flexible";
import "./assets/style/core.scss";
// import "./assets/style/tailwind.css";

Vue.prototype.$api = api;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
