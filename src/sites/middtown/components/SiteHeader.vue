<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { crossSiteUrl } from '../../../lib/site'

const tamarindUrl = crossSiteUrl('tamarind')

const scrolled = ref(false)
function onScroll() {
  scrolled.value = window.scrollY > 40
}
onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header class="site-header" :class="{ 'site-header--scrolled': scrolled }">
    <a class="wordmark" href="/">Middtown Perspectives</a>

    <nav class="nav">
      <a class="nav__link" href="/">Photographs</a>
    </nav>

    <div class="socials">
      <a
        class="socials__link"
        href="https://www.instagram.com/middtownperspectives/"
        target="_blank"
        rel="noopener"
        aria-label="Instagram"
      >IG</a>
      <a
        class="socials__link"
        href="http://vero.co/middtownperspectives"
        target="_blank"
        rel="noopener"
        aria-label="Vero"
      >Vero</a>
      <a
        class="socials__link"
        :href="tamarindUrl"
        aria-label="Tamarind Studio"
      >Studio</a>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  padding: 1.5rem 2rem;
  background: linear-gradient(to bottom, rgba(16,16,18,0.85), transparent);
  transition: background 0.3s ease, padding 0.3s ease, backdrop-filter 0.3s ease;
}

.site-header--scrolled {
  background: rgba(16, 16, 18, 0.92);
  backdrop-filter: blur(8px);
  padding: 1rem 2rem;
  border-bottom: 1px solid var(--hairline);
}

.wordmark {
  font-family: var(--font-display);
  font-weight: 500;
  font-size: 1.05rem;
  letter-spacing: 0.02em;
  white-space: nowrap;
}

.nav {
  flex: 1;
  display: flex;
  justify-content: center;
}

.nav__link {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--muted);
  padding-bottom: 2px;
  border-bottom: 1px solid transparent;
  transition: color 0.2s ease, border-color 0.2s ease;
}

.nav__link:hover,
.nav__link:focus-visible {
  color: var(--ink);
  border-color: var(--accent);
}

.socials {
  display: flex;
  gap: 1.1rem;
}

.socials__link {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  color: var(--muted);
  transition: color 0.2s ease;
}

.socials__link:hover,
.socials__link:focus-visible {
  color: var(--accent);
}

@media (max-width: 640px) {
  .site-header {
    padding: 1.1rem 1.25rem;
  }
  .nav {
    display: none;
  }
  .wordmark {
    font-size: 0.9rem;
  }
}
</style>
