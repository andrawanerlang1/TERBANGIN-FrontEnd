import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import FlightDetail from '../views/FlightDetail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/detail',
    name: 'FlightDetail',
    component: FlightDetail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
