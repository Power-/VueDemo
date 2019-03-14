import Vue from 'vue'
import Router from 'vue-router'

import viewHome from './views/viewHome.vue'
import viewButton from './views/viewButton.vue'
import viewList from './views/viewList.vue'
import viewNav from './views/viewNav.vue'

// const viewHome = () => import("@/views/viewHome.vue")

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'home',
    component: viewHome
  },
  {
    path: '/btn',
    name: 'btn',
    component: viewButton
  },
  {
    path: '/list',
    name: 'list',
    component: viewList
  },
  {
    path: '/nav',
    name: 'nav',
    component: viewNav
  }
]

// routes
const router = new Router({
routes})

export default router
