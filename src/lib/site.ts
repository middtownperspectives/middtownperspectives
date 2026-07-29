import type { Site } from './types'

/** Determines which site to render: `?site=` override, then hostname, defaulting to Middtown. */
export function detectSite(): Site {
  const params = new URLSearchParams(window.location.search)
  const override = params.get('site')
  if (override === 'middtown' || override === 'tamarind') return override

  return window.location.hostname.startsWith('tamarind.') ? 'tamarind' : 'middtown'
}

/**
 * URL for linking to the *other* site. In dev/preview (where both sites live
 * on the same origin) this uses the `?site=` override so cross-links are
 * actually clickable locally; in production it points at the real subdomain.
 */
export function crossSiteUrl(target: Site): string {
  if (import.meta.env.DEV) {
    const url = new URL(window.location.origin)
    url.searchParams.set('site', target)
    return url.toString()
  }

  return target === 'tamarind'
    ? 'https://tamarind.middtownperspectives.com'
    : 'https://middtownperspectives.com'
}
