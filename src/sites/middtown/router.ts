import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import NotFound from '../../shared/views/NotFound.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
