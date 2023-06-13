import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserView from '../views/UserView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: '/registration',
        name: 'registration',
        component: () => import(/* webpackChunkName: "about" */ '../views/RegistrationView.vue')
      },
      {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
      }
    ]
  },
  {
    path: '/user',
    name: 'user',
    component: UserView,
    children: [
      {
        path: '/services',
        name: 'services',
        component: () => import(/* webpackChunkName: "services" */ '../views/ServicesView.vue')
      },
      {
        path: '/sales',
        name: 'sales',
        component: () => import(/* webpackChunkName: "sales" */ '../views/SalesView.vue')
      },
      {
        path: '/warehouse',
        name: 'warehouse',
        component: () => import(/* webpackChunkName: "warehouse" */ '../views/WarehouseView.vue')
      },
      {
        path: '/analytics',
        name: 'analytics',
        component: () => import(/* webpackChunkName: "analytics" */ '../views/AnalyticsView.vue'),
      },
      {
        path: '/stuff',
        name: 'stuff',
        component: () => import(/* webpackChunkName: "analytics" */ '../views/StuffView.vue'),
      }
    ]
  },
]

const router = createRouter({
  mode: "history",
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
