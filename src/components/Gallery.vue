<script setup>
defineProps({
  photos: { type: Array, required: true },
})
const emit = defineEmits(['open'])
</script>

<template>
  <section class="gallery" aria-label="Photograph gallery">
    <button
      v-for="(photo, index) in photos"
      :key="photo.id"
      class="frame"
      type="button"
      @click="emit('open', index)"
    >
      <span class="frame__count">{{ String(index + 1).padStart(2, '0') }} / {{ String(photos.length).padStart(2, '0') }}</span>
      <img class="frame__img" :src="photo.src" :alt="photo.alt" loading="lazy" />
      <span class="frame__border" aria-hidden="true"></span>
    </button>
  </section>
</template>

<style scoped>
.gallery {
  columns: 3 320px;
  column-gap: 3px;
  padding: 3px;
  background: var(--void);
}

.frame {
  position: relative;
  display: block;
  width: 100%;
  break-inside: avoid;
  margin-bottom: 3px;
  padding: 0;
  border: 0;
  background: none;
  overflow: hidden;
}

.frame__img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.5s ease, filter 0.4s ease;
}

.frame__border {
  position: absolute;
  inset: 0;
  border: 1px solid transparent;
  transition: border-color 0.25s ease;
  pointer-events: none;
}

.frame__count {
  position: absolute;
  top: 0.7rem;
  left: 0.7rem;
  z-index: 2;
  font-family: var(--font-mono);
  font-size: 0.68rem;
  letter-spacing: 0.08em;
  color: var(--paper);
  background: rgba(16,16,18,0.55);
  padding: 0.2rem 0.5rem;
  opacity: 0;
  transform: translateY(-4px);
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.frame:hover .frame__img,
.frame:focus-visible .frame__img {
  transform: scale(1.035);
}

.frame:hover .frame__border,
.frame:focus-visible .frame__border {
  border-color: var(--safelight);
}

.frame:hover .frame__count,
.frame:focus-visible .frame__count {
  opacity: 1;
  transform: translateY(0);
}

.frame:focus-visible {
  outline: 2px solid var(--safelight);
  outline-offset: -2px;
}

@media (max-width: 640px) {
  .gallery {
    columns: 1;
  }
}
</style>
