import { createApp } from 'vue'
import './style.css'
import { detectSite } from './lib/site'

async function bootstrap() {
  const site = detectSite()
  document.documentElement.dataset.theme = site

  const [{ default: App }, { default: router }] =
    site === 'tamarind'
      ? await Promise.all([import('./sites/tamarind/App.vue'), import('./sites/tamarind/router')])
      : await Promise.all([import('./sites/middtown/App.vue'), import('./sites/middtown/router')])

  createApp(App).use(router).mount('#app')
}

bootstrap()
