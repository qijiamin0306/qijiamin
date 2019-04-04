import Vue from 'vue'
import Router from 'vue-router'
import Mall from './views/Mall.vue'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: 'mall',
          name: 'mall',
          component: Mall
        },
        {
          path: 'user',
          name: 'user',
          component: () => import(/* webpackChunkName: "user" */ './views/User.vue')
        }
      ]
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import(/* webpackChunkName: "detail" */ './views/Detail.vue')
    },
    {
      path: '/order',
      name: 'order',
      component: () => import(/* webpackChunkName: "order" */ './views/Order.vue')
    },
    {
      path: '/loginOrReg',
      name: 'loginOrReg',
      component: () => import(/* webpackChunkName: "loginOrReg" */ './views/LoginOrReg.vue')
    }
  ]
})
