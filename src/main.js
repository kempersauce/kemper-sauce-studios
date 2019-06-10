import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import "./registerServiceWorker";
import routes from './router';
//plugins
import NowUIKit from './plugins/now-ui-kit';

Vue.config.productionTip = false;
Vue.use(NowUIKit);
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  linkActiveClass: 'active',
  mode: "history"
});

new Vue({
  el: '#app',
  render: h => h(App),
  router,
});
