import { ref, type ComputedRef, type Ref } from 'vue'
import type { Photo } from '../../lib/types'

/** Shared open/close/next/prev state for a Lightbox over a reactive photo list. */
export function useLightbox(photos: Ref<Photo[]> | ComputedRef<Photo[]>) {
  const activeIndex = ref<number | null>(null)

  function open(i: number) {
    activeIndex.value = i
  }
  function close() {
    activeIndex.value = null
  }
  function next() {
    if (activeIndex.value === null) return
    activeIndex.value = (activeIndex.value + 1) % photos.value.length
  }
  function prev() {
    if (activeIndex.value === null) return
    activeIndex.value = (activeIndex.value - 1 + photos.value.length) % photos.value.length
  }

  return { activeIndex, open, close, next, prev }
}
