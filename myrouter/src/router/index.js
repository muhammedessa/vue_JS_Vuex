import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Muhammed from '../views/Muhammed.vue';
import Profile from '../views/Profile.vue';



Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/muhammedessa',
    name: 'Muhammed',
    component: Muhammed
  } ,
  {
    path: '/profile/:userid',
    name: 'Profile',
    component: Profile
  } 
]

const router = new VueRouter({
   mode: 'history',
  routes
})

export default router
