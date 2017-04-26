import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app.vue'
import touters from './router-config.js'
Vue.use(VueRouter);

// 创建路由
var router = new VueRouter(touters);
// // console.log(router);
// var resulst = new Map(RouterConfig);
// console.log(resulst);
// router.map(RouterConfig);
router
var app = new Vue({
  // 实例挂载路由
  router,
  render: h => h(App)
}).$mount("#app")
// const test = Vue.extend(App)
// router.start(test, '#app')
window.router = router;
