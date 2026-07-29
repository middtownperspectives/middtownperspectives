<script setup lang="ts">
import type { Photo } from '../../../lib/types'

defineProps<{ photos: Photo[] }>()
const emit = defineEmits<{ open: [index: number] }>()
</script>

<template>
  <section class="gallery" aria-label="Photograph gallery">
    <button
      v-for="(photo, index) in photos"
      :key="photo.id"
      class="frame"
      :data-orientation="photo.orientation"
      type="button"
      @click="emit('open', index)"
    >
      <img class="frame__img" :src="photo.src" :alt="photo.alt" loading="lazy" />
      <span class="frame__edge" aria-hidden="true"></span>
    </button>
  </section>
</template>

<style scoped>
.gallery {
  columns: 3 300px;
  column-gap: var(--gutter);
  padding: var(--margin);
}

.frame {
  position: relative;
  display: block;
  width: 100%;
  break-inside: avoid;
  margin-bottom: var(--gutter);
  padding: 0;
  border: 0;
  background: var(--hairline);
  overflow: hidden;
}

.frame__img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.5s ease;
}

.frame__edge {
  position: absolute;
  inset: 0;
  border: 1px solid transparent;
  transition: border-color 0.25s ease;
  pointer-events: none;
}

.frame:hover .frame__img,
.frame:focus-visible .frame__img {
  transform: scale(1.04);
}

.frame:hover .frame__edge,
.frame:focus-visible .frame__edge {
  border-color: var(--accent);
}

.frame:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}

@media (max-width: 640px) {
  .gallery {
    columns: 1;
  }
}
</style>
