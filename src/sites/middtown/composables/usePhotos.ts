import { ref, onMounted } from 'vue'
import { isSanityConfigured } from '../../../lib/sanity'
import { fetchAllPhotos } from '../../../lib/queries'
import { seedPhotos, heroPhoto } from '../data/seed-photos'
import type { Photo } from '../../../lib/types'

const allPhotos = ref<Photo[]>(isSanityConfigured ? [] : seedPhotos)
const loading = ref(isSanityConfigured)
const loaded = ref(!isSanityConfigured)

async function load() {
  if (loaded.value || !isSanityConfigured) return
  loading.value = true
  try {
    const photos = await fetchAllPhotos('middtown')
    allPhotos.value = photos.length > 0 ? photos : seedPhotos
  } catch (err) {
    console.error('Failed to load photos from Sanity, using seed data.', err)
    allPhotos.value = seedPhotos
  } finally {
    loading.value = false
    loaded.value = true
  }
}

/** Reactive access to all Middtown photos, and the hero image. */
export function usePhotos() {
  onMounted(load)

  return { allPhotos, loading, heroPhoto }
}
