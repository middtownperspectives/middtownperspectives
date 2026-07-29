import { ref, computed, onMounted } from 'vue'
import { isSanityConfigured } from '../../../lib/sanity'
import { fetchAllPhotos } from '../../../lib/queries'
import { seedPhotos } from '../data/seed-photos'
import type { Photo, CategorySlug } from '../../../lib/types'

const allPhotos = ref<Photo[]>(isSanityConfigured ? [] : seedPhotos)
const loading = ref(isSanityConfigured)
const loaded = ref(!isSanityConfigured)

async function load() {
  if (loaded.value || !isSanityConfigured) return
  loading.value = true
  try {
    const photos = await fetchAllPhotos('tamarind')
    allPhotos.value = photos.length > 0 ? photos : seedPhotos
  } catch (err) {
    console.error('Failed to load photos from Sanity, using seed data.', err)
    allPhotos.value = seedPhotos
  } finally {
    loading.value = false
    loaded.value = true
  }
}

/** Reactive access to all Tamarind photos, and helpers scoped by category. */
export function usePhotos() {
  onMounted(load)

  const byCategory = (category: CategorySlug) =>
    computed(() => allPhotos.value.filter((p) => p.category === category))

  const byProject = (project: string) =>
    computed(() => allPhotos.value.filter((p) => p.project === project))

  const featured = computed(() => {
    const flagged = allPhotos.value.filter((p) => p.featured)
    return flagged.length > 0 ? flagged : allPhotos.value.slice(0, 24)
  })

  return { allPhotos, loading, byCategory, byProject, featured }
}
