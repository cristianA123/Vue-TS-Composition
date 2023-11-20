import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import PrivateLayout from './../layouts/PrivateLayout.vue'
import AuthLayout from './../layouts/AuthLayout.vue'
import AuthView from '../views/AuthView.vue'
import EmployeeView from '../views/EmployeeView.vue'

import isAuthenticatedGuard from './auth-guard'


const routes: Array<RouteRecordRaw> = [
 
  {
      path: '/',
      component: PrivateLayout,
      beforeEnter: [ isAuthenticatedGuard ],
      children: [
        {
          path: '',
          component: EmployeeView,
          meta: { title: 'Home' }
        },
        {
          path: '/home',
          component: EmployeeView,
          meta: { title: 'Home' }
        }
      ]
    },
    {
      path: '/auth',
      component: AuthLayout,
      children: [
        {
          path: 'login',
          name: 'auth-signin',
          component: AuthView,
          meta: { title: 'Auth' }
        }
      ]
    },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})


export default router
