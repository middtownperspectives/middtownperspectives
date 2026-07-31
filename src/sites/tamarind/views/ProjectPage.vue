<script setup lang="ts">
import { computed, watch } from 'vue'
import { usePhotos } from '../composables/usePhotos'
import { tamarindProjects } from '../../../lib/types'
import PageHead from '../components/PageHead.vue'
import Gallery from '../components/Gallery.vue'
import Lightbox from '../../../shared/components/Lightbox.vue'
import NotFound from '../../../shared/views/NotFound.vue'
import { useLightbox } from '../../../shared/composables/useLightbox'

const props = defineProps<{ project: string }>()

const { byProject } = usePhotos()
const photos = computed(() => byProject(props.project).value)
const meta = computed(() => tamarindProjects.find((p) => p.slug === props.project))

const { activeIndex, open, close, next, prev } = useLightbox(photos)

// Close the lightbox if the user navigates to a different project while it's open.
watch(() => props.project, close)
</script>

<template>
  <NotFound v-if="!meta" />
  <template v-else>
    <router-link class="back-link" to="/special-projects">← Special Projects</router-link>
    <PageHead :title="meta.label" :tagline="meta.tagline" />
    <p v-if="photos.length === 0" class="coming-soon">Images coming soon.</p>
    <Gallery v-else :photos="photos" @open="open" />

    <Lightbox
      v-if="activeIndex !== null"
      :photos="photos"
      :index="activeIndex"
      @close="close"
      @next="next"
      @prev="prev"
    />
  </template>
</template>

<style scoped>
.back-link {
  display: inline-block;
  margin: 2rem var(--margin) -1rem;
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--muted);
  transition: color 0.2s ease;
}
.back-link:hover {
  color: var(--accent);
}

.coming-soon {
  padding: 4rem var(--margin) 6rem;
  font-family: var(--font-mono);
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--muted);
}
</style>
