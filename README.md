# I'm Aaron

## Welcome to Middtown Perspectives

### Skills

<div style="display:flex; justify-content:space-between; flex-direction:row;">
<img height="24px" width="24px" alt="HTML5" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
<img height="24px" width="24px" alt="CSS3" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
<img height="24px" width="24px" alt="Sass" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" />
<img height="24px" width="24px" alt="JavaScript" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
<img height="24px" width="24px" alt="TypeScript" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
<img height="24px" width="24px" alt="Vue.js" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" />
<img height="24px" width="24px" alt="Vite" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" />
</div>

### Organizing My Stuff

I build, design and [make things](https://www.aaronmiddleton.co) while also practicing my passion for [photography, typography and print](https://www.middtownperspectives.com)

---

## Middtown Perspectives (this repo)

A Vue 3 + Vite rebuild of middtownperspectives.com — a photograph gallery site, previously on Squarespace.

### Structure

- `src/App.vue` — top-level layout (header, hero, gallery, footer, lightbox)
- `src/components/SiteHeader.vue` — fixed nav with wordmark + social links
- `src/components/Hero.vue` — full-bleed opening image + title
- `src/components/Gallery.vue` — masonry photo grid, click to open lightbox
- `src/components/Lightbox.vue` — full-size viewer with keyboard (←/→/Esc) nav
- `src/components/SiteFooter.vue` — footer with copyright + social links
- `src/data/photos.js` — all photo data (this is the file to edit to add,
  remove, or reorder photos)

### Run locally

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

### Build for production

```bash
npm run build
```

This outputs a static site to `dist/` — deployable anywhere that serves
static files (Netlify, Vercel, Cloudflare Pages, GitHub Pages, S3, etc.).

### Important: move your images off Squarespace's CDN

Right now `src/data/photos.js` points at the original
`images.squarespace-cdn.com` URLs so the site works immediately. Squarespace
CDN links sometimes keep serving for a while after a plan is cancelled, but
this is not guaranteed and could break without warning.

To fully own your images:

1. In Squarespace (before your account/media access disappears), download
   full-resolution originals of every photo. Squarespace: Settings ->
   Advanced -> Import/Export, or open each image and use its download
   option.
2. Drop the files into `src/assets/photos/`.
3. In `src/data/photos.js`, replace each CDN URL with a local import, e.g.:

   ```js
   import p01 from '../assets/photos/000011830012.jpg'
   // ...
   { id: 'p01', src: p01, alt: 'The Lensman — frame 01' },
   ```

   Vite will bundle, hash, and optimize these automatically.

### Editing content

- Add/remove/reorder photos: edit the `photos` array in
  `src/data/photos.js`.
- Hero image: edit `heroPhoto` in the same file.
- Site title / nav / social links: edit `src/components/SiteHeader.vue`
  and `src/components/SiteFooter.vue`.
- Colors and fonts: all design tokens live at the top of `src/style.css`
  as CSS custom properties (--void, --paper, --warm-gray, --safelight,
  --font-display, --font-body, --font-mono).

### Deploying

The simplest path is Cloudflare Pages, Netlify, or Vercel:

1. Push this project to a GitHub repo.
2. Connect the repo in your host of choice.
3. Build command: `npm run build`. Output directory: `dist`.
4. Point your domain's DNS at the host once the first deploy succeeds.

### Domain

Your domain registration (middtownperspectives.com) is separate from
Squarespace hosting/subscription -- cancelling the site subscription doesn't
usually cancel the domain itself, but double check in your Squarespace
domains settings before you finish migrating, so you don't lose the domain
along with the site.
