import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginPage.vue') 
  },
  {
    path: '/signUp',
    name: 'SigUp',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SignUp.vue')
  },
  {
    path: '/account',
    name: 'ProfileAccount',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProfileAccount.vue') 
  },
  {
    path: '/posts',
    name: 'Posts',
    component: () => import(/* webpackChunkName: "about" */ '../views/Posts.vue') 
  },
  {
    path: '/list',
    name: 'DisplayPages',
    component: () => import(/* webpackChunkName: "about" */ '../views/DisplayPages.vue') 
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
