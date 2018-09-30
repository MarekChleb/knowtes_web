import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import axios from 'axios'

Vue.config.productionTip = false

var additions = {
  $axios: axios
}

Object.assign(Vue.prototype, additions)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
