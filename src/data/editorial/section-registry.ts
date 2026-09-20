export type EditorialSpecialSection =
  | 'plans'
  | 'alipay-plus'
  | 'assistance'
  | 'wallet-community'
  | 'charity-wishope'
  | 'press-promotions';

export interface EditorialSectionConfig {
  section: EditorialSpecialSection;
  renderGenericContent: boolean;
}

export const editorialSectionRegistry = {
  piani: { section: 'plans', renderGenericContent: false },
  'pagamenti/alipay-plus': { section: 'alipay-plus', renderGenericContent: true },
  assistenza: { section: 'assistance', renderGenericContent: true },
  wallet: { section: 'wallet-community', renderGenericContent: true },
  community: { section: 'wallet-community', renderGenericContent: true },
  'community/charity': { section: 'charity-wishope', renderGenericContent: false },
  'community/wishope': { section: 'charity-wishope', renderGenericContent: false },
  stampa: { section: 'press-promotions', renderGenericContent: false },
  promozioni: { section: 'press-promotions', renderGenericContent: false },
} as const satisfies Record<string, EditorialSectionConfig>;

export function getEditorialSectionConfig(slug: string): EditorialSectionConfig | undefined {
  return editorialSectionRegistry[slug as keyof typeof editorialSectionRegistry];
}
