import { createRouter, createWebHistory } from 'vue-router'
import Overview from './views/Overview.vue'
import CategoryPage from './views/CategoryPage.vue'
import SpecialProjects from './views/SpecialProjects.vue'
import ProjectPage from './views/ProjectPage.vue'
import NotFound from '../../shared/views/NotFound.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'overview', component: Overview },
    {
      path: '/portraits',
      name: 'portraits',
      component: CategoryPage,
      props: { slug: 'portraits' },
    },
    {
      path: '/special-projects',
      name: 'special-projects',
      component: SpecialProjects,
    },
    {
      path: '/special-projects/:project',
      name: 'project',
      component: ProjectPage,
      props: true,
    },
    { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
