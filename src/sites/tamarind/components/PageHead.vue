<script setup lang="ts">
defineProps<{ title: string; tagline?: string }>()
</script>

<template>
  <div class="page-head">
    <h1 class="page-head__title">{{ title }}</h1>
    <p v-if="tagline" class="page-head__tagline">{{ tagline }}</p>
  </div>
</template>

<style scoped>
.page-head {
  padding: 3rem var(--margin) 1rem;
}

.page-head__title {
  font-family: var(--font-display);
  font-style: italic;
  font-weight: 500;
  font-size: clamp(2rem, 5vw, 3.25rem);
  margin: 0 0 0.6rem;
  color: var(--ink);
}

.page-head__tagline {
  font-family: var(--font-body);
  font-size: 0.95rem;
  color: var(--muted);
  max-width: 40ch;
  margin: 0;
}
</style>
