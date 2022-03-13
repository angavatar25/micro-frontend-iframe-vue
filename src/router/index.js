import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../components/Homepage.vue'
import UserCart from '../components/UserCart.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/cart',
    name: 'cart-user',
    component: UserCart
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
