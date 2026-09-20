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

export interface EditorialPage {
  slug: string;
  eyebrow: string;
  title: string;
  intro: string;
  summary: string;
  sections: EditorialSection[];
  cta?: { label: string; href: string };
  image?: EditorialAsset;
  links?: EditorialLink[];
}
