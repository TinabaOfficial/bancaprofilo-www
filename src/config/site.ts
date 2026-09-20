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
