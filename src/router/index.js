import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect:'/',
    component: HomeView,
    children: [
      {
        path: "/",
        name: "register.form",
        props: true,
        meta: {transition: 'slide-down'},
        component: () => import("@/views/pages/registerForm")
      },
      {
        path: "/user/list",
        name: "user.list",
        props: true,
        meta: {transition: 'slide-down'},
        component: () => import("@/views/pages/userList")
      },
      {
        path: "/user/:id",
        name: "user.list",
        props: true,
        meta: {transition: 'slide-down'},
        component: () => import("@/views/pages/userList")
      },
    ]

  },
]

const router = new VueRouter({
  routes
})

export default router
