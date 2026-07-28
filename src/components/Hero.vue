<script setup>
import MpLogo from './MpLogo.vue'

defineProps({
  photo: { type: Object, required: true },
})
</script>

<template>
  <section class="hero">
    <img class="hero__img" :src="photo.src" :alt="photo.alt" />
    <div class="hero__scrim" />
    <div class="hero__caption">
      <span class="hero__eyebrow">
        <MpLogo class="hero__mark" />
        Middtown
      </span>
      <h1 class="hero__title">The Lensman</h1>
    </div>
    <div class="hero__scroll" aria-hidden="true">
      <span></span>
      Scroll
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
}

.hero__img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(0.15) contrast(1.03);
}

.hero__scrim {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(16,16,18,0.95) 0%,
    rgba(16,16,18,0.15) 45%,
    rgba(16,16,18,0.35) 100%
  );
}

.hero__caption {
  position: absolute;
  left: 2rem;
  bottom: 3.5rem;
  z-index: 2;
}

.hero__eyebrow {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--safelight);
  margin-bottom: 0.6rem;
}

.hero__mark {
  width: 14px;
  height: 14px;
  flex-shrink: 0;
}

.hero__title {
  font-family: var(--font-display);
  font-weight: 600;
  font-style: italic;
  font-size: clamp(2.5rem, 8vw, 5.5rem);
  line-height: 0.95;
  margin: 0;
  color: var(--paper);
}

.hero__scroll {
  position: absolute;
  right: 2rem;
  bottom: 3.5rem;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-family: var(--font-mono);
  font-size: 0.68rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--warm-gray);
}

.hero__scroll span {
  width: 1px;
  height: 28px;
  background: var(--warm-gray);
  position: relative;
  overflow: hidden;
}

.hero__scroll span::after {
  content: '';
  position: absolute;
  top: -100%;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--safelight);
  animation: scrollLine 2.2s ease-in-out infinite;
}

@keyframes scrollLine {
  0% { top: -100%; }
  60% { top: 100%; }
  100% { top: 100%; }
}

@media (max-width: 640px) {
  .hero__caption { left: 1.25rem; bottom: 2.5rem; }
  .hero__scroll { display: none; }
}
</style>
