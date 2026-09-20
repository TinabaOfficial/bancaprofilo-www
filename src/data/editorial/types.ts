export interface EditorialPage {
  slug: string;
  eyebrow: string;
  title: string;
  intro: string;
  summary: string;
  sections: Array<{ title: string; body: string }>;
  cta?: { label: string; href: string };
  image?: { src: string; alt: string };
  links?: Array<{ label: string; href: string }>;
}
