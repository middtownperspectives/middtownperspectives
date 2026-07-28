<script setup>
import { onMounted, onUnmounted } from 'vue'

const props = defineProps({
  photos: { type: Array, required: true },
  index: { type: Number, required: true },
})
const emit = defineEmits(['close', 'next', 'prev'])

function onKeydown(e) {
  if (e.key === 'Escape') emit('close')
  if (e.key === 'ArrowRight') emit('next')
  if (e.key === 'ArrowLeft') emit('prev')
}

onMounted(() => {
  window.addEventListener('keydown', onKeydown)
  document.body.style.overflow = 'hidden'
})
onUnmounted(() => {
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <div class="lightbox" @click.self="emit('close')">
    <button class="lightbox__close" type="button" @click="emit('close')" aria-label="Close">✕</button>

    <button class="lightbox__nav lightbox__nav--prev" type="button" @click="emit('prev')" aria-label="Previous photo">‹</button>

    <figure class="lightbox__figure">
      <img class="lightbox__img" :src="photos[index].src" :alt="photos[index].alt" />
      <figcaption class="lightbox__caption">
        {{ String(index + 1).padStart(2, '0') }} / {{ String(photos.length).padStart(2, '0') }}
      </figcaption>
    </figure>

    <button class="lightbox__nav lightbox__nav--next" type="button" @click="emit('next')" aria-label="Next photo">›</button>
  </div>
</template>

<style scoped>
.lightbox {
  position: fixed;
  inset: 0;
  z-index: 100;
  background: rgba(10, 10, 11, 0.97);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 5rem;
  animation: fadeIn 0.2s ease;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.lightbox__figure {
  margin: 0;
  max-width: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.9rem;
}

.lightbox__img {
  max-width: 100%;
  max-height: 82vh;
  width: auto;
  height: auto;
  border: 1px solid var(--hairline);
  box-shadow: 0 0 60px rgba(0,0,0,0.6);
}

.lightbox__caption {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.15em;
  color: var(--safelight);
}

.lightbox__close {
  position: absolute;
  top: 1.75rem;
  right: 2rem;
  background: none;
  border: 0;
  color: var(--paper);
  font-size: 1.2rem;
  line-height: 1;
  padding: 0.5rem;
  transition: color 0.2s ease;
}
.lightbox__close:hover { color: var(--safelight); }

.lightbox__nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: 0;
  color: var(--warm-gray);
  font-size: 2.75rem;
  line-height: 1;
  padding: 0.5rem 1rem;
  transition: color 0.2s ease;
}
.lightbox__nav:hover { color: var(--safelight); }
.lightbox__nav--prev { left: 0.5rem; }
.lightbox__nav--next { right: 0.5rem; }

@media (max-width: 640px) {
  .lightbox { padding: 3rem 1rem; }
  .lightbox__nav { font-size: 2rem; padding: 0.4rem 0.6rem; }
  .lightbox__nav--prev { left: -0.25rem; }
  .lightbox__nav--next { right: -0.25rem; }
}
</style>
