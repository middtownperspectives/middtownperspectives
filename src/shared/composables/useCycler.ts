import { ref, onMounted, onUnmounted, watch, unref, type Ref } from 'vue'

/** Cycles an index through `[0, length)` on an interval, restarting if a reactive length changes. */
export function useCycler(length: number | Ref<number>, intervalMs = 2500) {
  const activeIndex = ref(0)
  let timer: ReturnType<typeof setInterval> | undefined

  function start() {
    stop()
    if (unref(length) < 2) return
    timer = setInterval(() => {
      activeIndex.value = (activeIndex.value + 1) % unref(length)
    }, intervalMs)
  }
  function stop() {
    if (timer) clearInterval(timer)
  }

  onMounted(start)
  onUnmounted(stop)

  if (typeof length !== 'number') {
    watch(length, () => {
      activeIndex.value = 0
      start()
    })
  }

  return { activeIndex, start, stop }
}
