import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import FlightDetail from '../views/FlightDetail.vue'
import Search from '../views/Search.vue'
import Landing from '../views/Landing.vue'
import MyBooking from '../views/Mybooking.vue'
import DetailProfile from '../views/DetailProfile.vue'
import BookingDetail from '../views/BookingDetail.vue'
import Chat from '../views/Chat.vue'
import Notifications from '../views/Notifications.vue'
import PostFlight from '../views/PostFlight.vue'

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
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/landing',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/mybooking',
    name: 'MyBooking',
    component: MyBooking
  },
  {
    path: '/detail-profile',
    name: 'Profile',
    component: DetailProfile
  },
  {
    path: '/detail-booking/:id',
    name: 'BookingDetail',
    component: BookingDetail
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Chat
  },
  {
    path: '/notifications',
    name: 'notifications',
    component: Notifications
  },
  {
    path: '/post-flight',
    name: 'PostFlight',
    component: PostFlight
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
