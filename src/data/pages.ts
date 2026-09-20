import { productsPages } from './editorial/products';
import { institutionalPages } from './editorial/institutional';
import { supportPages } from './editorial/support';

export type { EditorialPage } from './editorial/types';

export const editorialPages = [
  ...productsPages,
  ...institutionalPages,
  ...supportPages,
];

export function getEditorialPage(slug: string): (typeof editorialPages)[number] | undefined {
  return editorialPages.find((page) => page.slug === slug);
}
