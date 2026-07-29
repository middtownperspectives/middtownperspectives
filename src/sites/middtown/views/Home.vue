<script setup lang="ts">
import Hero from '../components/Hero.vue'
import MasonryGallery from '../components/MasonryGallery.vue'
import Lightbox from '../../../shared/components/Lightbox.vue'
import { usePhotos } from '../composables/usePhotos'
import { useLightbox } from '../../../shared/composables/useLightbox'

const { allPhotos, heroPhoto } = usePhotos()
const { activeIndex, open, close, next, prev } = useLightbox(allPhotos)
</script>

<template>
  <Hero :photo="heroPhoto" />
  <MasonryGallery :photos="allPhotos" @open="open" />

  <Lightbox
    v-if="activeIndex !== null"
    :photos="allPhotos"
    :index="activeIndex"
    @close="close"
    @next="next"
    @prev="prev"
  />
</template>
