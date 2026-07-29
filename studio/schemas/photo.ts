// Sanity Studio schema for a single photo, shared by both Middtown Perspectives
// and Tamarind. Copy this into your Sanity Studio project's schema folder
// once it's created (see README.md "Setting up Sanity").
//
// Typed against Sanity's own `Rule`/`hidden` shapes locally (rather than `any`)
// since this file isn't compiled as part of this repo — it's copied into a
// separate Sanity Studio project that already has the real `sanity` package.

interface SchemaRule {
  required: () => SchemaRule
}

interface HiddenContext {
  document?: { category?: string }
}

export default {
  name: 'photo',
  title: 'Photo',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Internal reference name — not shown on the site.',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule: SchemaRule) => Rule.required(),
    },
    {
      name: 'alt',
      title: 'Alt text',
      type: 'string',
      description: 'Describes the image for screen readers and SEO.',
      validation: (Rule: SchemaRule) => Rule.required(),
    },
    {
      name: 'site',
      title: 'Site',
      type: 'string',
      options: {
        list: [
          { title: 'Middtown Perspectives', value: 'middtown' },
          { title: 'Tamarind', value: 'tamarind' },
        ],
      },
      validation: (Rule: SchemaRule) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'Pick the category matching the Site field above.',
      options: {
        list: [
          { title: 'Middtown — Street', value: 'street' },
          { title: 'Middtown — Misc', value: 'misc' },
          { title: 'Middtown — Urban Landscapes', value: 'urban-landscapes' },
          { title: 'Middtown — Interior Landscapes', value: 'interior-landscapes' },
          { title: 'Tamarind — Portraits', value: 'portraits' },
          { title: 'Tamarind — Special Projects', value: 'special-projects' },
        ],
      },
      validation: (Rule: SchemaRule) => Rule.required(),
    },
    {
      name: 'project',
      title: 'Project',
      type: 'string',
      description: 'Special Projects only — which shoot this belongs to, e.g. "oakland-coliseum".',
      hidden: ({ document }: HiddenContext) => document?.category !== 'special-projects',
    },
    {
      name: 'featured',
      title: 'Featured on Overview',
      type: 'boolean',
      description: 'Show this photo in the curated Overview gallery.',
      initialValue: false,
    },
    {
      name: 'orderRank',
      title: 'Order',
      type: 'number',
      description: 'Lower numbers appear first within a category.',
    },
  ],
  preview: {
    select: { title: 'title', media: 'image', subtitle: 'site' },
  },
}
