import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

// These come from a .env file (see .env.example). Until you've created a
// Sanity project and set them, `isSanityConfigured` is false and both sites
// fall back to their local seed data — so the sites work out of the box, and
// you can flip over to Sanity whenever you're ready.
const projectId = import.meta.env.VITE_SANITY_PROJECT_ID as string | undefined
const dataset = import.meta.env.VITE_SANITY_DATASET as string | undefined

export const isSanityConfigured = Boolean(projectId && dataset)

export const sanityClient = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion: '2024-01-01',
      useCdn: true,
    })
  : null

const builder = sanityClient ? imageUrlBuilder(sanityClient) : null

/** Build a responsive, sized image URL from a Sanity image reference. */
export function urlFor(source: unknown) {
  if (!builder) throw new Error('Sanity is not configured')
  return builder.image(source as never)
}
