import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/Inicio',
      name: 'Inicio',
      component: () => import('../views/InicioView.vue')
    },
    {
      path: '/Cliente',
      name: 'Cliente',
      component: () => import('../views/ClientesView.vue')
    },
    {
      path: '/Contacto',
      name: 'Contacto',
      component: () => import('../views/ContactosView.vue')
    },
    {
      path: '/Producto',
      name: 'Producto',
      component: () => import('../views/ProductoView.vue')
    }
  ]
})

export default router
