<script setup lang="ts">
import { computed } from 'vue'
import { usePhotos } from '../composables/usePhotos'
import { tamarindProjects } from '../../../lib/types'
import PageHead from '../components/PageHead.vue'

const { byProject } = usePhotos()

const tiles = computed(() =>
  tamarindProjects.map((project) => {
    const photos = byProject(project.slug).value
    const cover = photos.find((p) => p.featured) ?? photos[0]
    const comingSoon = project.tagline.toLowerCase().includes('coming soon')
    return { ...project, cover, comingSoon }
  })
)
</script>

<template>
  <PageHead title="Special Projects" tagline="Longer-form documentary work." />

  <div class="projects">
    <component
      :is="tile.comingSoon ? 'div' : 'router-link'"
      v-for="tile in tiles"
      :key="tile.slug"
      class="project-tile"
      :class="{
        'project-tile--empty': !tile.cover,
        'project-tile--disabled': tile.comingSoon && tile.cover,
      }"
      :to="tile.comingSoon ? undefined : `/special-projects/${tile.slug}`"
      :aria-disabled="tile.comingSoon && tile.cover ? 'true' : undefined"
    >
      <img v-if="tile.cover" class="project-tile__img" :src="tile.cover.src" :alt="tile.cover.alt" />
      <span v-if="tile.cover" class="project-tile__edge" aria-hidden="true"></span>
      <div class="project-tile__caption">
        <h2 class="project-tile__label">{{ tile.label }}</h2>
        <p class="project-tile__tagline">{{ tile.tagline }}</p>
      </div>
    </component>
  </div>
</template>

<style scoped>
.projects {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: var(--gutter);
  padding: var(--margin);
}

.project-tile {
  position: relative;
  display: block;
  aspect-ratio: 4 / 5;
  overflow: hidden;
  background: var(--hairline);
}

.project-tile__img {
  /* Overscan by --cover-crop and let .project-tile's overflow:hidden clip
     it, trimming any white border some source photos carry. max-width
     override is required: the global `img { max-width: 100% }` reset
     otherwise clamps this back down to exactly 100%, silently canceling
     the horizontal half of the overscan. */
  position: absolute;
  inset: calc(-1 * var(--cover-crop));
  width: calc(100% + var(--cover-crop) * 2);
  height: calc(100% + var(--cover-crop) * 2);
  max-width: none;
  object-fit: cover;
}

.project-tile__caption {
  position: absolute;
  inset: auto 0 0 0;
  padding: 1.25rem;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.65), transparent);
  color: #f6efe4;
}

/* Tiles with a cover image keep the title hidden until the visitor hovers
   or focuses them, so the photo reads on its own first. */
.project-tile:not(.project-tile--empty) .project-tile__caption {
  opacity: 0;
  transform: translateY(6px);
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.project-tile:not(.project-tile--empty):hover .project-tile__caption,
.project-tile:not(.project-tile--empty):focus-visible .project-tile__caption {
  opacity: 1;
  transform: translateY(0);
}

/* A colored ring wraps the image on hover so it's clear the tile opens a project. */
.project-tile__edge {
  position: absolute;
  inset: 0;
  border: 2px solid transparent;
  transition: border-color 0.25s ease;
  pointer-events: none;
}

.project-tile:not(.project-tile--disabled):hover .project-tile__edge,
.project-tile:not(.project-tile--disabled):focus-visible .project-tile__edge {
  border-color: var(--accent);
}

/* Projects with photos but no gallery yet: hovering still reveals the title
   (already reads "coming soon") but the ring stays muted and the cursor
   signals there's nothing to click. */
.project-tile--disabled {
  cursor: not-allowed;
}

.project-tile--disabled:hover .project-tile__edge,
.project-tile--disabled:focus-visible .project-tile__edge {
  border-color: var(--muted);
}

.project-tile--empty {
  display: flex;
  align-items: flex-end;
}

.project-tile--empty .project-tile__caption {
  position: static;
  width: 100%;
  background: none;
  color: var(--ink);
}

.project-tile--empty .project-tile__tagline {
  color: var(--muted);
}

.project-tile__label {
  font-family: var(--font-display);
  font-style: italic;
  font-weight: 500;
  font-size: 1.4rem;
  margin: 0 0 0.3rem;
}

.project-tile__tagline {
  font-family: var(--font-body);
  font-size: 0.85rem;
  margin: 0;
  opacity: 0.85;
}

.project-tile:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}
</style>
