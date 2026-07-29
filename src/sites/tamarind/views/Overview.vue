<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { usePhotos } from '../composables/usePhotos'

const { featured } = usePhotos()

const activeIndex = ref(0)
let timer: ReturnType<typeof setInterval> | undefined

function start() {
  stop()
  if (featured.value.length < 2) return
  timer = setInterval(() => {
    activeIndex.value = (activeIndex.value + 1) % featured.value.length
  }, 5500)
}
function stop() {
  if (timer) clearInterval(timer)
}

onMounted(start)
onUnmounted(stop)
watch(featured, () => {
  activeIndex.value = 0
  start()
})
</script>

<template>
  <section class="cycle" aria-label="Featured photographs">
    <img
      v-for="(photo, i) in featured"
      :key="photo.id"
      class="cycle__img"
      :class="{ 'cycle__img--active': i === activeIndex }"
      :src="photo.src"
      :alt="photo.alt"
    />
    <div class="cycle__scrim" aria-hidden="true" />

    <div class="cycle__caption">
      <p class="cycle__eyebrow">Studio FormYard — Photography</p>
      <h1 class="cycle__title">We don't just take photos —<br />we distill mood, memory, and meaning.</h1>
      <p class="cycle__body">
        Layered like the fruit that inspires our name, our photography reveals
        texture, soul, and story — from intimate portraits to urban geometry.
      </p>
    </div>
  </section>
</template>

<style scoped>
.cycle {
  position: relative;
  height: 100vh;
  height: 100dvh;
  width: 100%;
  overflow: hidden;
  background: var(--bg);
}

.cycle__img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 20%;
  opacity: 0;
  transition: opacity 1.4s ease;
}

.cycle__img--active {
  opacity: 1;
}

.cycle__scrim {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.6) 0%,
    rgba(0, 0, 0, 0.1) 40%,
    rgba(0, 0, 0, 0.3) 100%
  );
}

.cycle__caption {
  position: absolute;
  left: var(--margin);
  right: var(--margin);
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  max-width: 60ch;
}

.cycle__eyebrow {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--accent);
  margin: 0 0 1.1rem;
}

.cycle__title {
  font-family: var(--font-display);
  font-style: italic;
  font-weight: 500;
  font-size: clamp(1.9rem, 4.5vw, 3rem);
  line-height: 1.15;
  margin: 0 0 1.2rem;
  color: #F6EFE4;
}

.cycle__body {
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(246, 239, 228, 0.85);
  margin: 0;
}

@media (prefers-reduced-motion: reduce) {
  .cycle__img {
    transition: none;
  }
}
</style>
