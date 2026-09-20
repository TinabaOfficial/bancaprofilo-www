import { siteConfig as rawSiteConfig } from '../../site.config.mjs';

export interface SiteConfig {
  canonicalUrl: string;
  productionHostname: string;
  destinations: Record<string, string>;
  services: Record<string, string>;
  social: Record<string, string>;
  appStores: Record<string, string>;
}

export const siteConfig = rawSiteConfig as SiteConfig;

export function siteUrl(path = '/') {
  return new URL(path, `${siteConfig.canonicalUrl}/`).toString();
}

/** Prefixes internal links with Astro's base path for project Pages sites. */
export function sitePath(path: string) {
  if (!path.startsWith('/') || path.startsWith('//')) return path;

  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path}` || '/';
}
