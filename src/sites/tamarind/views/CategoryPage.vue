<script setup lang="ts">
import { computed, watch } from 'vue'
import { usePhotos } from '../composables/usePhotos'
import { tamarindCategories } from '../../../lib/types'
import type { CategorySlug } from '../../../lib/types'
import PageHead from '../components/PageHead.vue'
import Gallery from '../components/Gallery.vue'
import Lightbox from '../../../shared/components/Lightbox.vue'
import { useLightbox } from '../../../shared/composables/useLightbox'

const props = defineProps<{ slug: CategorySlug }>()

const { byCategory } = usePhotos()
const photos = computed(() => byCategory(props.slug).value)
const meta = computed(() => tamarindCategories.find((c) => c.slug === props.slug)!)

const { activeIndex, open, close, next, prev } = useLightbox(photos)

// Close the lightbox if the user navigates to a different category while it's open.
watch(() => props.slug, close)
</script>

<template>
  <PageHead :title="meta.label" :tagline="meta.tagline" />
  <Gallery :photos="photos" @open="open" />

  <Lightbox
    v-if="activeIndex !== null"
    :photos="photos"
    :index="activeIndex"
    @close="close"
    @next="next"
    @prev="prev"
  />
</template>
