import Vue from 'vue';
import VueRouter from 'vue-router';
import App from 'components/app.vue';
import Routers from './router';

Vue.use(VueRouter);

// 路由配置
let router = new VueRouter({
    routes:Routers
});

router.beforeEach(() => {
    window.scrollTo(0, 0);
});

router.afterEach(() => {

});

// 从而让整个应用都有路由功能
const app = new Vue({
  router,
  render: h => h(App)
}).$mount('#app');