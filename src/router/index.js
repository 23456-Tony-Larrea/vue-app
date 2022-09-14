import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SidebarView from '../views/sidebar/Sidebar.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
   path:'/index',
   name:'Sidebar',
   component :SidebarView 
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
