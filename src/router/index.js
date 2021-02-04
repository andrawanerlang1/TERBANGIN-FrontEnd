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
import Boarding from '../views/Boarding.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { requiresVisitor: true }
  },
  {
    path: '/detail',
    name: 'FlightDetail',
    component: FlightDetail,
    meta: { requiresAuth: true }
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/mybooking',
    name: 'MyBooking',
    component: MyBooking,
    meta: { requiresAuth: true }
  },
  {
    path: '/detail-profile',
    name: 'Profile',
    component: DetailProfile,
    meta: { requiresAuth: true }
  },
  {
    path: '/detail-booking/:id',
    name: 'BookingDetail',
    component: BookingDetail,
    meta: { requiresAuth: true }
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Chat,
    meta: { requiresAuth: true }
  },
  {
    path: '/notifications',
    name: 'notifications',
    component: Notifications,
    meta: { requiresAuth: true }
  },
  {
    path: '/post-flight',
    name: 'PostFlight',
    component: PostFlight,
    meta: { requiresAuth: true }
  },
  {
    path: '/boarding/:id',
    name: 'Boarding',
    component: Boarding,
    meta: { requiresAuth: true }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isLogin) {
      next({
        path: '/login'
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    if (store.getters.isLogin) {
      next({
        path: '/'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
