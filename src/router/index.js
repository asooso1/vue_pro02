import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: () => import("@/views/HomeView.vue"),
  },
  {
    path: '/search',
    name: 'SearchView',
    component: () => import("@/views/SearchView.vue")
  },
  {
    path: "/grade",
    name: "GradeView",
    component: () => import("@/views/GradeView.vue")
  },
  {
    path: "/title",
    name: "TitleView", 
    component: () => import("@/views/TitleView.vue")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
