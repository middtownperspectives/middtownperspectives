<script setup lang="ts">
import { useCycler } from '../composables/useCycler'

const cameras = [
  { name: 'Leica M-A' },
  { name: 'Fujifilm GW690' },
  { name: 'Fujifilm GW645w' },
  { name: 'Mamiya RB67 Pro' },
]

const { activeIndex } = useCycler(cameras.length, 2200)
</script>

<template>
  <section class="not-found">
    <div class="rig" role="img" :aria-label="`Illustration of a ${cameras[activeIndex].name}`">
      <!-- Leica M-A -->
      <svg
        class="rig__camera"
        :class="{ 'rig__camera--active': activeIndex === 0 }"
        viewBox="0 0 260 200"
        aria-hidden="true"
      >
        <rect x="70" y="62" width="120" height="10" rx="3" />
        <rect x="70" y="70" width="120" height="75" rx="6" />
        <circle cx="130" cy="110" r="30" />
        <circle cx="130" cy="110" r="20" />
        <circle cx="130" cy="110" r="10" />
        <rect x="82" y="50" width="14" height="10" rx="2" />
        <circle cx="110" cy="55" r="5" />
        <circle cx="165" cy="58" r="9" />
        <line x1="165" y1="49" x2="165" y2="53" />
        <path d="M185 64 L200 60" />
        <circle cx="72" cy="80" r="3" />
        <circle cx="188" cy="80" r="3" />
      </svg>

      <!-- Fujifilm GW690 -->
      <svg
        class="rig__camera"
        :class="{ 'rig__camera--active': activeIndex === 1 }"
        viewBox="0 0 260 200"
        aria-hidden="true"
      >
        <rect x="40" y="57" width="180" height="10" rx="3" />
        <rect x="40" y="65" width="180" height="85" rx="8" />
        <circle cx="130" cy="115" r="42" />
        <circle cx="130" cy="115" r="30" />
        <circle cx="130" cy="115" r="16" />
        <rect x="55" y="45" width="18" height="12" rx="2" />
        <circle cx="88" cy="51" r="6" />
        <circle cx="195" cy="53" r="8" />
        <circle cx="44" cy="76" r="3" />
        <circle cx="216" cy="76" r="3" />
      </svg>

      <!-- Fujifilm GW645w -->
      <svg
        class="rig__camera"
        :class="{ 'rig__camera--active': activeIndex === 2 }"
        viewBox="0 0 260 200"
        aria-hidden="true"
      >
        <rect x="65" y="60" width="130" height="10" rx="3" />
        <rect x="65" y="68" width="130" height="78" rx="8" />
        <circle cx="130" cy="112" r="34" />
        <circle cx="130" cy="112" r="24" />
        <circle cx="130" cy="112" r="12" />
        <rect x="78" y="48" width="16" height="11" rx="2" />
        <circle cx="104" cy="54" r="5" />
        <circle cx="172" cy="56" r="8" />
        <circle cx="68" cy="78" r="3" />
        <circle cx="192" cy="78" r="3" />
      </svg>

      <!-- Mamiya RB67 Pro -->
      <svg
        class="rig__camera"
        :class="{ 'rig__camera--active': activeIndex === 3 }"
        viewBox="0 0 260 200"
        aria-hidden="true"
      >
        <rect x="95" y="45" width="70" height="55" rx="4" />
        <line x1="95" y1="52" x2="165" y2="52" />
        <rect x="55" y="95" width="150" height="75" rx="6" />
        <circle cx="130" cy="132" r="38" />
        <circle cx="130" cy="132" r="26" />
        <circle cx="190" cy="100" r="5" />
        <circle cx="205" cy="115" r="10" />
        <line x1="205" y1="107" x2="205" y2="111" />
        <line x1="205" y1="119" x2="205" y2="123" />
        <circle cx="58" cy="105" r="3" />
        <circle cx="202" cy="105" r="3" />
      </svg>
    </div>

    <p class="not-found__eyebrow">{{ cameras[activeIndex].name }}</p>
    <h1 class="not-found__title">404</h1>
    <p class="not-found__body">This frame doesn't exist.</p>
    <router-link class="not-found__link" to="/">← Back home</router-link>
  </section>
</template>

<style scoped>
.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  min-height: 100dvh;
  padding: 2rem;
  text-align: center;
  background: var(--bg);
  color: var(--ink);
}

.rig {
  position: relative;
  width: min(70vw, 260px);
  aspect-ratio: 260 / 200;
  margin-bottom: 2rem;
}

.rig__camera {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  fill: none;
  stroke: currentColor;
  stroke-width: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
  opacity: 0;
  transition: opacity 0.6s ease;
}

.rig__camera--active {
  opacity: 1;
}

.not-found__eyebrow {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--accent);
  margin: 0 0 0.75rem;
  min-height: 1em;
}

.not-found__title {
  font-family: var(--font-display);
  font-style: italic;
  font-weight: 600;
  font-size: clamp(3rem, 12vw, 5rem);
  line-height: 1;
  margin: 0 0 0.75rem;
}

.not-found__body {
  font-size: 1rem;
  color: var(--muted);
  margin: 0 0 2rem;
}

.not-found__link {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--muted);
  border-bottom: 1px solid transparent;
  padding-bottom: 2px;
  transition: color 0.2s ease, border-color 0.2s ease;
}

.not-found__link:hover,
.not-found__link:focus-visible {
  color: var(--accent);
  border-color: var(--accent);
}

@media (prefers-reduced-motion: reduce) {
  .rig__camera {
    transition: none;
  }
}
</style>
