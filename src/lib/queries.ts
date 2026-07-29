import { sanityClient, urlFor } from './sanity'
import type { Photo, Site, CategorySlug } from './types'

interface SanityPhotoDoc {
  _id: string
  title?: string
  alt?: string
  site: Site
  category: CategorySlug
  project?: string
  featured?: boolean
  image: unknown
  dimensions?: { width: number; height: number }
}

const PHOTO_PROJECTION = `{
  _id,
  title,
  alt,
  site,
  category,
  project,
  featured,
  image,
  "dimensions": image.asset->metadata.dimensions
}`

function toPhoto(doc: SanityPhotoDoc): Photo {
  return {
    id: doc._id,
    src: urlFor(doc.image).width(1800).quality(85).auto('format').url(),
    alt: doc.alt || doc.title || 'Photograph',
    site: doc.site,
    category: doc.category,
    project: doc.project,
    orientation: doc.dimensions
      ? doc.dimensions.width >= doc.dimensions.height
        ? 'horizontal'
        : 'vertical'
      : undefined,
    featured: doc.featured,
  }
}

/** Fetch every photo for a site, ordered by the order set in Sanity Studio. */
export async function fetchAllPhotos(site: Site): Promise<Photo[]> {
  if (!sanityClient) return []
  const docs: SanityPhotoDoc[] = await sanityClient.fetch(
    `*[_type == "photo" && site == $site] | order(orderRank asc) ${PHOTO_PROJECTION}`,
    { site }
  )
  return docs.map(toPhoto)
}

/** Fetch photos for a single category within a site. */
export async function fetchPhotosByCategory(site: Site, category: CategorySlug): Promise<Photo[]> {
  if (!sanityClient) return []
  const docs: SanityPhotoDoc[] = await sanityClient.fetch(
    `*[_type == "photo" && site == $site && category == $category] | order(orderRank asc) ${PHOTO_PROJECTION}`,
    { site, category }
  )
  return docs.map(toPhoto)
}

/** Fetch just the photos flagged `featured` for a site's Overview page. */
export async function fetchFeaturedPhotos(site: Site): Promise<Photo[]> {
  if (!sanityClient) return []
  const docs: SanityPhotoDoc[] = await sanityClient.fetch(
    `*[_type == "photo" && site == $site && featured == true] | order(orderRank asc) ${PHOTO_PROJECTION}`,
    { site }
  )
  return docs.map(toPhoto)
}
