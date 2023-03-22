import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const Router = createRouter({
  history: createWebHashHistory(),
  routes: [{
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      icon: 'mdi-home'
    }
  },]
})

export default Router