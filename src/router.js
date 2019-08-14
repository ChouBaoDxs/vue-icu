import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/zh_CN',
      name: 'zh_CN',
      component: () => import('./views/Zh_CN.vue')
    },
    {
      path: '/en_US',
      name: 'en_US',
      component: () => import('./views/En_US.vue')
    },
    {
      path: '/es_MX',
      name: 'es_MX',
      component: () => import('./views/Es_MX.vue')
    },
    {
      path: '/de_DE',
      name: 'de_DE',
      component: () => import('./views/De_DE.vue')
    },
    {
      path: '/',
      redirect: '/zh_CN'
    }
  ],
  base: '/icu'
})
