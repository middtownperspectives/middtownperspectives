<script setup>
import MpLogo from './MpLogo.vue'
</script>

<template>
  <footer class="footer">
    <span class="footer__brand">
      <MpLogo class="footer__mark" />
      <span class="footer__text">© {{ new Date().getFullYear() }} Middtown Perspectives</span>
    </span>
    <div class="footer__socials">
      <a href="https://www.instagram.com/middtownperspectives/" target="_blank" rel="noopener">Instagram</a>
      <a href="http://vero.co/middtownperspectives" target="_blank" rel="noopener">Vero</a>
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
  padding: 2.5rem 2rem 3rem;
  border-top: 1px solid var(--hairline);
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.08em;
  color: var(--warm-gray);
}

.footer__brand {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.footer__mark {
  width: 16px;
  height: 16px;
  color: var(--warm-gray);
  flex-shrink: 0;
}

.footer__socials {
  display: flex;
  gap: 1.25rem;
}

.footer__socials a:hover {
  color: var(--safelight);
}
</style>
