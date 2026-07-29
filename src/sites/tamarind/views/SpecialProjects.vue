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
    return { ...project, cover }
  })
)
</script>

<template>
  <PageHead title="Special Projects" tagline="Longer-form documentary work." />

  <div class="projects">
    <router-link
      v-for="tile in tiles"
      :key="tile.slug"
      class="project-tile"
      :class="{ 'project-tile--empty': !tile.cover }"
      :to="`/special-projects/${tile.slug}`"
    >
      <img v-if="tile.cover" class="project-tile__img" :src="tile.cover.src" :alt="tile.cover.alt" />
      <div class="project-tile__caption">
        <h2 class="project-tile__label">{{ tile.label }}</h2>
        <p class="project-tile__tagline">{{ tile.tagline }}</p>
      </div>
    </router-link>
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
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.project-tile:hover .project-tile__img,
.project-tile:focus-visible .project-tile__img {
  transform: scale(1.04);
}

.project-tile__caption {
  position: absolute;
  inset: auto 0 0 0;
  padding: 1.25rem;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.65), transparent);
  color: #f6efe4;
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
