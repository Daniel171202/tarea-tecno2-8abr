import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import FormView from '@/views/FormView.vue'
import RecordsAdministrador from '@/views/Administrador/RecordsAdministrador.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/form',
      name: 'form',
      component: FormView,
    },
    {
      path: '/admi/records',
      name: 'records',
      component: RecordsAdministrador,
    },

 
  ],
})

export default router
