<script setup lang="ts">
import { watch } from 'vue'
import { useRoute } from 'vue-router'
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
import { tamarindProjects } from '../../lib/types'

const route = useRoute()

// Vue Router doesn't touch document.title on its own, and a static title
// left over from the previous view is a WCAG 2.4.2 (Page Titled) miss for
// an SPA with this many distinct routes — screen-reader and tab users rely
// on it to tell pages apart.
function pageTitle(): string {
  switch (route.name) {
    case 'overview':
      return 'Tamarind'
    case 'portraits':
      return 'Portraits — Tamarind'
    case 'special-projects':
      return 'Special Projects — Tamarind'
    case 'project': {
      const project = tamarindProjects.find((p) => p.slug === route.params.project)
      return project ? `${project.label} — Tamarind` : 'Special Projects — Tamarind'
    }
    default:
      return 'Not Found — Tamarind'
  }
}

watch(() => route.fullPath, () => { document.title = pageTitle() }, { immediate: true })
</script>

<template>
  <SiteHeader />
  <main>
    <router-view />
  </main>
  <SiteFooter />
</template>
