import { siteConfig } from '../config/site';

export interface NavigationLink {
  label: string;
  href?: string;
  external?: boolean;
  pending?: string;
}

export interface NavigationGroup {
  label: string;
  href?: string;
  links: NavigationLink[];
}

export interface NavigationSection {
  id: string;
  label: string;
  overview?: NavigationLink;
  activePaths: string[];
  groups: NavigationGroup[];
  featured?: NavigationFeature;
}

export interface NavigationFeature {
  label: string;
  title: string;
  links: NavigationLink[];
}

export const initiativesGroup: NavigationGroup = {
  label: 'Più valore per te',
  links: [
    { label: 'Tutte le promozioni', href: '/promozioni/' },
    { label: 'Valore Scuola', href: '/promozioni/scuola/' },
    { label: 'Valore Mese' },
    { label: 'Altri vantaggi', href: '/privati/vantaggi/' },
  ],
};

export const privateGroups: NavigationGroup[] = [
  {
    label: 'Profili',
    links: [
      { label: 'Start', href: '/piani/start/' },
      { label: 'Premium', href: '/piani/premium/' },
      { label: 'Minorenni', href: '/piani/under18/' },
      { label: 'Confronta i profili', href: '/piani/' },
    ],
  },
  {
    label: 'Conto e carta',
    links: [
      { label: 'Conto', href: '/wallet/' },
      { label: 'Carta prepagata', href: '/carta/' },
      { label: 'American Express', href: '/pagamenti/american-express/' },
    ],
  },
  {
    label: 'Pagamenti',
    links: [
      { label: 'Pagare e trasferire denaro', href: '/pagamenti/trasferimenti/' },
      { label: 'Alipay+', href: '/pagamenti/alipay-plus/' },
    ],
  },
  {
    label: 'Risparmi',
    links: [
      { label: 'Soluzioni di risparmio', href: '/risparmio/' },
      { label: 'Conto Deposito', href: '/risparmio/conto-deposito/' },
      { label: 'Salvadanaio', href: '/risparmio/salvadanaio/' },
    ],
  },
  {
    label: 'Investimenti',
    links: [
      { label: 'Soluzioni di investimento', href: '/investimenti/' },
      { label: 'RoboAdvisor', href: '/investimenti/roboadvisor/' },
      { label: 'Conto Titoli', href: '/investimenti/conto-titoli/' },
      { label: 'Cripto', href: '/investimenti/cripto/' },
    ],
  },
  {
    label: 'Spese Condivise',
    links: [{ label: 'Gruppi e raccolte', href: '/condivisione/' }],
  },
  initiativesGroup,
];

export const commitmentLinks: NavigationLink[] = [
  { label: 'Educazione finanziaria', href: '/chi-siamo/educazione-finanziaria/' },
  { label: 'Charity e iniziative solidali', href: '/community/charity/' },
  { label: 'WISHOPe', href: '/community/wishope/' },
];

export const partnershipLinks: NavigationLink[] = [
  { label: 'Partner tecnologici', href: '/chi-siamo/partnership/partner-tecnologici/' },
  {
    label: 'Partner commerciali e di servizio',
    href: '/chi-siamo/partnership/partner-commerciali-e-di-servizio/',
  },
];

export const businessGroups: NavigationGroup[] = [
  {
    label: 'Business',
    links: [{ label: 'Business', href: '/business/' }],
  },
  {
    label: 'Servizi per Community',
    links: [{ label: 'Servizi per Community', href: '/community/' }],
  },
];

export const mainNavigation: NavigationSection[] = [
  {
    id: 'privati',
    label: 'Privati',
    overview: { label: 'Tutto per i privati', href: '/privati/' },
    activePaths: [
      '/soluzioni/', '/privati/', '/piani/', '/wallet/', '/carta/',
      '/pagamenti/', '/risparmio/', '/investimenti/', '/condivisione/',
      '/promozioni/',
    ],
    groups: privateGroups.filter((group) => group !== initiativesGroup),
    featured: {
      label: 'Più valore per te',
      title: 'Valore per ciò che conta.',
      links: initiativesGroup.links,
    },
  },
  {
    id: 'business',
    label: 'Business',
    overview: { label: 'Tutto per il tuo business', href: '/business/panoramica/' },
    activePaths: ['/business/', '/community/'],
    groups: businessGroups,
  },
  {
    id: 'chi-siamo',
    label: 'Chi Siamo',
    activePaths: [
      '/chi-siamo/', '/banca-profilo/', '/stampa/',
      '/community/charity/', '/community/wishope/',
    ],
    groups: [
      {
        label: 'Tinaba di Banca Profilo',
        links: [{ label: 'Tinaba di Banca Profilo', href: '/chi-siamo/' }],
      },
      {
        label: 'Il nostro impegno',
        links: commitmentLinks,
      },
      { label: 'Partnership', links: partnershipLinks },
      {
        label: 'Area stampa',
        links: [{ label: 'Area stampa', href: '/stampa/' }],
      },
    ],
  },
  {
    id: 'assistenza',
    label: 'Assistenza',
    activePaths: ['/assistenza/', '/documenti/', '/accessibilita/', '/privacy/', '/cookie/'],
    groups: [
      {
        label: 'FAQ',
        links: [{ label: 'FAQ', href: '/assistenza/#faq' }],
      },
      {
        label: 'Contattaci',
        links: [{ label: 'Contattaci', href: '/assistenza/#contatti' }],
      },
    ],
  },
];

export const footerGroups: NavigationGroup[] = [
  {
    label: 'Assistenza',
    links: [
      { label: 'FAQ', href: '/assistenza/#faq' },
      { label: 'Contattaci', href: '/assistenza/#contatti' },
      { label: 'Manuale d’uso', href: siteConfig.destinations.userManual, external: true },
      { label: 'Accessibilità', href: '/accessibilita/' },
      { label: 'Reclami e disconoscimenti', href: '/documenti/reclami/' },
    ],
  },
  {
    label: 'Sicurezza',
    links: [{ label: 'Sicurezza', href: '/assistenza/sicurezza/' }],
  },
  {
    label: 'Trasparenza',
    links: [
      { label: 'Trasparenza', href: '/documenti/#trasparenza' },
      { label: 'Documenti legali', href: '/documenti/' },
      { label: 'Promozioni e regolamenti', href: '/promozioni/' },
      { label: 'PSD2', href: siteConfig.destinations.psd2, external: true },
      { label: 'Whistleblowing', href: siteConfig.destinations.whistleblowing, external: true },
    ],
  },
  {
    label: 'Privacy e cookie',
    links: [
      { label: 'Informativa Privacy', href: '/documents/Privacy-policy-Banca-Profilo-luglio-2026.pdf' },
      { label: 'Informativa Privacy Sito', href: '/documents/Privacy-policy_V0926.pdf' },
      { label: 'Informativa sui Cookie', href: '/cookie/' },
    ],
  },
];

export const navigationPages = [
  {
    slug: 'privati',
    title: 'Tutto per i privati',
    parent: { label: 'Home', href: '/' },
    groups: privateGroups,
  },
  {
    slug: 'business/panoramica',
    title: 'Tutto per il tuo business',
    parent: { label: 'Home', href: '/' },
    groups: businessGroups,
  },
  {
    slug: 'chi-siamo/impegno',
    title: 'Il nostro impegno',
    parent: { label: 'Chi Siamo', href: '/chi-siamo/' },
    groups: [{ label: 'Il nostro impegno', links: commitmentLinks }],
  },
  {
    slug: 'chi-siamo/partnership',
    title: 'Partnership',
    parent: { label: 'Chi Siamo', href: '/chi-siamo/' },
    groups: [
      { label: 'Partnership', links: partnershipLinks },
      {
        label: 'Approfondimenti',
        links: [
          { label: 'Alipay+', href: '/pagamenti/alipay-plus/' },
          { label: 'American Express', href: '/pagamenti/american-express/' },
          { label: 'Corso ICE SDA Bocconi', href: siteConfig.destinations.course, external: true },
        ],
      },
    ],
  },
  {
    slug: 'chi-siamo/partnership/partner-tecnologici',
    title: 'Partner tecnologici',
    parent: { label: 'Partnership', href: '/chi-siamo/partnership/' },
    groups: [],
  },
  {
    slug: 'chi-siamo/partnership/partner-commerciali-e-di-servizio',
    title: 'Partner commerciali e di servizio',
    parent: { label: 'Partnership', href: '/chi-siamo/partnership/' },
    groups: [],
  },
  {
    slug: 'privati/vantaggi',
    title: 'Altri vantaggi',
    parent: { label: 'Tutto per i privati', href: '/privati/' },
    groups: [
      {
        label: 'Altri vantaggi',
        links: [
          { label: 'Premium', href: '/piani/premium/' },
          { label: 'Viaggi', href: '/pagamenti/mondiali/' },
          { label: 'Ambassador', href: '/community/ambassador/' },
        ],
      },
    ],
  },
] satisfies {
  slug: string;
  title: string;
  parent: NavigationLink;
  groups: NavigationGroup[];
}[];
