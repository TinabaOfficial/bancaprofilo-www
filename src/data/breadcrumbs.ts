interface BreadcrumbNode {
  label: string;
  parent?: string;
}

export interface BreadcrumbItem {
  label: string;
  href: string;
}

// La gerarchia segue il menu approvato, anche quando differisce dal percorso URL.
const breadcrumbNodes: Record<string, BreadcrumbNode> = {
  privati: { label: 'Privati' },
  soluzioni: { label: 'Soluzioni' },
  piani: { label: 'Profili', parent: 'privati' },
  'piani/start': { label: 'Start', parent: 'piani' },
  'piani/premium': { label: 'Premium', parent: 'piani' },
  'piani/under18': { label: 'Minorenni', parent: 'piani' },
  wallet: { label: 'Conto e carta', parent: 'privati' },
  carta: { label: 'Carta prepagata', parent: 'wallet' },
  pagamenti: { label: 'Pagamenti', parent: 'privati' },
  'pagamenti/trasferimenti': { label: 'Pagare e trasferire denaro', parent: 'pagamenti' },
  'pagamenti/alipay-plus': { label: 'Alipay+', parent: 'pagamenti' },
  'pagamenti/apple-pay': { label: 'Apple Pay', parent: 'pagamenti' },
  'pagamenti/google-pay': { label: 'Google Pay', parent: 'pagamenti' },
  'pagamenti/gift-card': { label: 'Gift Card', parent: 'pagamenti' },
  'pagamenti/american-express': { label: 'American Express', parent: 'wallet' },
  'pagamenti/mondiali': { label: 'Viaggi', parent: 'privati/vantaggi' },
  condivisione: { label: 'Spese condivise', parent: 'privati' },
  'condivisione/gruppi': { label: 'Gruppi', parent: 'condivisione' },
  'condivisione/raccolte': { label: 'Raccolte', parent: 'condivisione' },
  risparmio: { label: 'Risparmi', parent: 'privati' },
  'risparmio/conto-deposito': { label: 'Conto Deposito', parent: 'risparmio' },
  'risparmio/salvadanaio': { label: 'Salvadanaio', parent: 'risparmio' },
  investimenti: { label: 'Investimenti', parent: 'privati' },
  'investimenti/roboadvisor': { label: 'RoboAdvisor', parent: 'investimenti' },
  'investimenti/conto-titoli': { label: 'Conto Titoli', parent: 'investimenti' },
  'investimenti/cripto': { label: 'Cripto', parent: 'investimenti' },
  promozioni: { label: 'Tutte le promozioni', parent: 'privati' },
  'promozioni/scuola': { label: 'Valore Scuola', parent: 'promozioni' },
  'privati/vantaggi': { label: 'Altri vantaggi', parent: 'privati' },
  'business/panoramica': { label: 'Business' },
  business: { label: 'Conto Business', parent: 'business/panoramica' },
  'business/e-commerce': { label: 'E-commerce', parent: 'business' },
  community: { label: 'Servizi per Community', parent: 'business/panoramica' },
  'community/ambassador': { label: 'Ambassador', parent: 'privati/vantaggi' },
  'chi-siamo': { label: 'Chi Siamo' },
  'chi-siamo/valori': { label: 'Identità e valori', parent: 'chi-siamo' },
  'chi-siamo/storia': { label: 'La storia', parent: 'chi-siamo' },
  'chi-siamo/impegno': { label: 'Il nostro impegno', parent: 'chi-siamo' },
  'chi-siamo/partnership': { label: 'Partnership', parent: 'chi-siamo' },
  'banca-profilo': { label: 'Banca Profilo', parent: 'chi-siamo' },
  stampa: { label: 'Area stampa', parent: 'chi-siamo' },
  'community/charity': { label: 'Charity e iniziative solidali', parent: 'chi-siamo/impegno' },
  'community/wishope': { label: 'WISHOPe', parent: 'chi-siamo/impegno' },
  assistenza: { label: 'Assistenza' },
  'assistenza/sicurezza': { label: 'Sicurezza', parent: 'assistenza' },
  accessibilita: { label: 'Accessibilità', parent: 'assistenza' },
  documenti: { label: 'Documenti legali' },
  'documenti/reclami': { label: 'Reclami e disconoscimenti', parent: 'assistenza' },
  privacy: { label: 'Informativa Privacy' },
  cookie: { label: 'Informativa sui Cookie' },
  'brand-guidelines': { label: 'Linee guida del brand' },
  '404': { label: 'Pagina non trovata' },
};

export function getBreadcrumbs(slug: string): BreadcrumbItem[] {
  const items: BreadcrumbItem[] = [];
  const visited = new Set<string>();
  let current: string | undefined = slug;

  while (current) {
    const node: BreadcrumbNode | undefined = breadcrumbNodes[current];
    if (!node || visited.has(current)) {
      throw new Error(`Gerarchia breadcrumb non valida: ${current}`);
    }
    visited.add(current);
    items.unshift({
      label: node.label,
      href: current === '404' ? '/404.html' : `/${current}/`,
    });
    current = node.parent;
  }

  return [{ label: 'Home', href: '/' }, ...items];
}
