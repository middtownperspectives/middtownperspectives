export type Site = 'middtown' | 'tamarind'

export type Orientation = 'horizontal' | 'vertical'

export type MiddtownCategorySlug = 'street' | 'misc' | 'urban-landscapes' | 'interior-landscapes'
export type TamarindCategorySlug = 'portraits' | 'special-projects'
export type CategorySlug = MiddtownCategorySlug | TamarindCategorySlug

export interface Photo {
  id: string
  src: string
  alt: string
  site: Site
  category: CategorySlug
  /** Sub-grouping within a category, e.g. which shoot a special project photo belongs to. */
  project?: string
  orientation?: Orientation
  featured?: boolean
}

export interface Category {
  slug: CategorySlug
  label: string
  tagline: string
}

export const middtownCategories: Category[] = [
  {
    slug: 'street',
    label: 'Street',
    tagline: 'Candid life, caught in public.',
  },
  {
    slug: 'misc',
    label: 'Misc',
    tagline: 'Everything else that caught the eye.',
  },
  {
    slug: 'urban-landscapes',
    label: 'Urban Landscapes',
    tagline: 'Form, light, and design in the city.',
  },
  {
    slug: 'interior-landscapes',
    label: 'Interior Landscapes',
    tagline: 'Space, light, and structure indoors.',
  },
]

export const tamarindCategories: Category[] = [
  {
    slug: 'portraits',
    label: 'Portraits',
    tagline: 'Poetic, personal, and deeply human.',
  },
  {
    slug: 'special-projects',
    label: 'Special Projects',
    tagline: 'Longer-form documentary work.',
  },
]

export interface Project {
  slug: string
  label: string
  tagline: string
}

export const tamarindProjects: Project[] = [
  {
    slug: 'oakland-coliseum',
    label: 'Oakland Coliseum',
    tagline: "The A's final season at the Coliseum, 1968–2024.",
  },
  {
    slug: 'inbal',
    label: 'Inbal',
    tagline: 'A portrait shoot in the grass and red rock.',
  },
  {
    slug: 'night-games',
    label: 'Night Games',
    tagline: 'Ballparks after dark.',
  },
  {
    slug: 'the-salon',
    label: 'Hair Salon',
    tagline: 'Portraits at the chair.',
  },
  {
    slug: 'letterpress',
    label: 'Letterpress Studio',
    tagline: 'Images coming soon.',
  },
  {
    slug: 'denver-neighborhoods',
    label: 'Denver Neighborhoods',
    tagline: 'Images coming soon.',
  },
]
