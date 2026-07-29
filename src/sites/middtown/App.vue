<script setup lang="ts">
import { onMounted } from 'vue'
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'

onMounted(() => {
  document.title = 'Middtown Perspectives'
})
</script>

<template>
  <SiteHeader />
  <main>
    <router-view />
  </main>
  <SiteFooter />
</template>
