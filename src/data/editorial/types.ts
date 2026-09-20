export type EditorialPageKind = 'product' | 'institutional' | 'support';

export interface EditorialAsset {
  src: string;
  alt: string;
}

export interface EditorialSection {
  title: string;
  body: string;
}

export interface EditorialLink {
  label: string;
  href: string;
}

interface EditorialPageBase {
  slug: string;
  kind: EditorialPageKind;
  eyebrow: string;
  title: string;
  intro: string;
  summary: string;
  sections: EditorialSection[];
  cta?: { label: string; href: string };
  image?: EditorialAsset;
  links?: EditorialLink[];
}

export interface ProductPage extends EditorialPageBase {
  kind: 'product';
}

export interface InstitutionalPage extends EditorialPageBase {
  kind: 'institutional';
}

export interface SupportPage extends EditorialPageBase {
  kind: 'support';
}

export type EditorialPage = ProductPage | InstitutionalPage | SupportPage;

export function defineEditorialPages<K extends EditorialPageKind>(
  kind: K,
  pages: Omit<Extract<EditorialPage, { kind: K }>, 'kind'>[],
): Extract<EditorialPage, { kind: K }>[] {
  return pages.map((page) => ({ ...page, kind })) as Extract<EditorialPage, { kind: K }>[];
}
