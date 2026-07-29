<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { tamarindCategories } from '../../../lib/types'
import { crossSiteUrl } from '../../../lib/site'

const middtownUrl = crossSiteUrl('middtown')
const route = useRoute()
const floating = computed(() => route.name === 'overview')
</script>

<template>
  <header class="site-header" :class="{ 'site-header--floating': floating }">
    <router-link class="wordmark" to="/">Tamarind</router-link>

    <nav class="nav">
      <router-link class="nav__link" to="/" exact-active-class="nav__link--active">Overview</router-link>
      <router-link
        v-for="cat in tamarindCategories"
        :key="cat.slug"
        class="nav__link"
        :to="`/${cat.slug}`"
        active-class="nav__link--active"
      >{{ cat.label }}</router-link>
    </nav>

    <div class="socials">
      <a
        class="social"
        href="https://www.instagram.com/studio.tamarind"
        target="_blank"
        rel="noopener"
      >Instagram</a>
      <a class="social" :href="middtownUrl">Middtown Perspectives</a>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  padding: 1.75rem var(--margin);
  border-bottom: 1px solid var(--hairline);
}

.site-header--floating {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 20;
  border-bottom: none;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.4), transparent);
}

.site-header--floating .wordmark,
.site-header--floating .nav__link,
.site-header--floating .social {
  color: #F6EFE4;
}

.wordmark {
  font-family: var(--font-display);
  font-style: italic;
  font-weight: 500;
  font-size: 1.3rem;
  white-space: nowrap;
}

.nav {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
}

.nav__link {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--ink);
  opacity: 0.55;
  padding-bottom: 3px;
  border-bottom: 1px solid transparent;
  transition: opacity 0.2s ease, border-color 0.2s ease;
}

.nav__link:hover,
.nav__link:focus-visible {
  opacity: 1;
}

.nav__link--active {
  opacity: 1;
  border-color: var(--accent);
}

.socials {
  display: flex;
  gap: 1.25rem;
}

.social {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.1em;
  color: var(--ink);
  opacity: 0.55;
  white-space: nowrap;
  transition: opacity 0.2s ease;
}
.social:hover { opacity: 1; }

@media (max-width: 720px) {
  .site-header {
    flex-wrap: wrap;
    row-gap: 0.9rem;
  }
  .nav {
    order: 3;
    width: 100%;
    gap: 1.25rem;
  }
  .socials { display: none; }
}
</style>
