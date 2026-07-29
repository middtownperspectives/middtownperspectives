<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { crossSiteUrl } from '../../../lib/site'

const middtownUrl = crossSiteUrl('middtown')
const route = useRoute()
const floating = computed(() => route.name === 'overview')
</script>

<template>
  <footer class="footer" :class="{ 'footer--floating': floating }">
    <span class="footer__text">© {{ new Date().getFullYear() }} Tamarind</span>
    <div class="footer__links">
      <a href="mailto:tamarind@onaseda.com">Email</a>
      <a href="https://www.instagram.com/studio.tamarind" target="_blank" rel="noopener">Instagram</a>
      <a :href="middtownUrl">Middtown Perspectives</a>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  padding: 2.5rem var(--margin) 3rem;
  border-top: 1px solid var(--hairline);
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.08em;
  color: var(--muted);
}

.footer__links {
  display: flex;
  gap: 1.25rem;
}

.footer__links a:hover {
  color: var(--accent);
}

.footer--floating {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 20;
  border-top: none;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.45), transparent);
  color: rgba(246, 239, 228, 0.85);
}
</style>
