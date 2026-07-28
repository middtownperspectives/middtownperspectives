<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import SiteHeader from './components/SiteHeader.vue'
import Hero from './components/Hero.vue'
import Gallery from './components/Gallery.vue'
import Lightbox from './components/Lightbox.vue'
import SiteFooter from './components/SiteFooter.vue'
import { photos, heroPhoto } from './data/photos.js'

const scrolled = ref(false)
function onScroll() {
  scrolled.value = window.scrollY > 40
}
onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))

const activeIndex = ref(null)
function openLightbox(i) { activeIndex.value = i }
function closeLightbox() { activeIndex.value = null }
function nextPhoto() { activeIndex.value = (activeIndex.value + 1) % photos.length }
function prevPhoto() { activeIndex.value = (activeIndex.value - 1 + photos.length) % photos.length }
</script>

<template>
  <SiteHeader :scrolled="scrolled" />
  <main>
    <Hero :photo="heroPhoto" />
    <Gallery :photos="photos" @open="openLightbox" />
  </main>
  <SiteFooter />

  <Lightbox
    v-if="activeIndex !== null"
    :photos="photos"
    :index="activeIndex"
    @close="closeLightbox"
    @next="nextPhoto"
    @prev="prevPhoto"
  />
</template>
