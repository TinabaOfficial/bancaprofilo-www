export const pressItems = [
  { date: '2026', title: 'Ora in Cina si paga con l’App Tinaba', text: 'Tinaba di Banca Profilo annuncia l’attivazione dei pagamenti digitali in euro nella Cina continentale grazie all’estensione della partnership strategica con Alipay+.', href: '/pagamenti/alipay-plus/' },
  { date: '2025', title: 'WISHOPe 2025', text: 'In occasione del Natale, la terza edizione del primo e-shop dove fare un vero regalo direttamente a chi ne ha bisogno.', href: '/community/wishope/' },
  { date: '2025', title: 'Grandi novità in Tinaba', text: 'AI, pagamenti in Cina e Voyager: innovazioni che ampliano l’esperienza dell’App Tinaba.', href: '/news/' },
  { date: '2025', title: 'Finanza Digitale: Neobank e tecnologie fintech', text: 'Il corso ideato da ICE SDA Bocconi in collaborazione con Tinaba unisce innovazione tecnologica e formazione accademica.', href: '/documents/CS-Tinaba-x-IULM-comunicato-stampa.pdf' },
  { date: '2025', title: 'Novità Conto Titoli', text: 'Banca Profilo porta il Conto Titoli sulla piattaforma Tinaba per investire in autonomia e semplicità direttamente in App.', href: '/investimenti/conto-titoli/' },
  { date: '2024', title: 'Tinaba e SDA Bocconi', text: 'Un programma per esplorare le nuove frontiere del fintech, dalla blockchain alle criptovalute.', href: '/news/' },
];

export const alipayPlusCountries = [
  'Cina', 'Giappone', 'Hong Kong', 'Macao', 'Emirati Arabi', 'Italia',
  'Qatar', 'Spagna', 'Francia', 'Germania', 'Regno Unito', 'Svizzera',
  'Mongolia', 'Sri Lanka', 'Nepal', 'Nuova Zelanda', 'Singapore',
  'Thailandia', 'Filippine', 'Stati Uniti', 'Australia', 'Malesia',
  'Corea del Sud', 'San Marino', 'Turchia', 'Cambogia', 'Laos', 'Maldive',
  'Armenia', 'Kazakistan', 'Mauritius', 'Cile', 'Perù', 'Argentina',
  'Colombia', 'Uzbekistan', 'Messico',
];
export const assistanceTopics = [
  {
    title: 'App e conto',
    text: 'Accesso, apertura, ricariche, bonifici e operazioni quotidiane dall’App Tinaba.',
    href: '/wallet/',
    label: 'Scopri conto e App',
  },
  {
    title: 'Carta e pagamenti',
    text: 'Pagamenti online e nei negozi, carta virtuale, prelievi e dispositivi compatibili.',
    href: '/carta/',
    label: 'Scopri la carta',
  },
  {
    title: 'Risparmio e investimenti',
    text: 'Conto Deposito, Conto Titoli, cripto e le informazioni da leggere prima di operare.',
    href: '/investimenti/',
    label: 'Scopri gli investimenti',
  },
  {
    title: 'Business',
    text: 'Incassi, e-commerce e strumenti per le attività che usano Tinaba Business.',
    href: '/business/',
    label: 'Scopri Tinaba Business',
  },
  {
    title: 'Sicurezza',
    text: 'Indicazioni per riconoscere comunicazioni sospette e proteggere i tuoi dati.',
    href: '/assistenza/sicurezza/',
    label: 'Leggi i consigli',
  },
  {
    title: 'Documenti e reclami',
    text: 'Trasparenza bancaria, documenti legali, reclami e disconoscimento delle operazioni.',
    href: '/documenti/',
    label: 'Consulta i documenti',
  },
];
export const assistanceFaqs = [
  {
    question: 'Posso emettere e ricevere bonifici?',
    answer: 'Sì. L’App Tinaba consente di emettere e ricevere bonifici nell’area SEPA. Costi e condizioni dipendono dal piano e dalla documentazione aggiornata.',
  },
  {
    question: 'Dove posso pagare con la carta?',
    answer: 'La carta Mastercard può essere utilizzata per gli acquisti nei negozi e online, nei limiti e secondo le condizioni del servizio.',
  },
  {
    question: 'Ho dimenticato il codice: cosa posso fare?',
    answer: 'Dalla schermata di accesso dell’App puoi selezionare la procedura per recuperare il codice e seguire le istruzioni ricevute sui recapiti associati.',
  },
  {
    question: 'Dove trovo le informazioni su costi e condizioni?',
    answer: 'Nella sezione Documenti trovi la trasparenza bancaria e la documentazione informativa da consultare prima di scegliere o utilizzare un prodotto.',
  },
];
export const planChoices = [
  {
    name: 'Premium',
    label: 'Più vantaggi',
    price: 'Da 3,99 €/mese*',
    audience: 'Per chi vuole di più dal proprio conto.',
    description: 'Funzionalità social, vantaggi dedicati e commissioni ridotte.',
    features: ['Sconti e servizi riservati', 'Power secondo condizioni', 'Assistenza dedicata'],
    href: '/piani/premium/',
    tone: 'featured',
  },
  {
    name: 'Start',
    label: 'Per ogni giorno',
    price: '0,00 €/mese',
    audience: 'Per gestire il quotidiano in semplicità.',
    description: 'Conto, carta e strumenti essenziali per gestire il tuo denaro in una sola App.',
    features: ['Conto con IBAN italiano', 'Carta prepagata Mastercard', 'Pagamenti e ricariche'],
    href: '/piani/start/',
    tone: 'neutral',
  },
  {
    name: 'Under 18',
    label: 'Per iniziare',
    price: '0,00 €/mese',
    audience: 'Per chi ha meno di 18 anni.',
    description: 'Un primo conto per iniziare a gestire il denaro con il supporto di un tutore.',
    features: ['A partire dai 12 anni', 'Carta prepagata', 'Parental control'],
    href: '/piani/under18/',
    tone: 'light',
  },
];
export const planDifferences = [
  { group: 'In breve', label: 'App e conto', premium: 'Più vantaggi e servizi riservati', start: 'Gli strumenti essenziali in App', under18: 'Strumenti per iniziare in autonomia' },
  { group: 'In breve', label: 'App personalizzata', premium: 'Inclusa', start: '—', under18: '—' },
  { group: 'Banking', label: 'Operatività bancaria', premium: 'Completa', start: 'Con limiti', under18: 'Con limiti' },
  { group: 'Carta e pagamenti', label: 'Carta Mastercard', premium: 'Virtuale e fisica*', start: 'Virtuale e fisica*', under18: 'Prepagata dedicata*' },
  { group: 'Carta e pagamenti', label: 'Pagamenti e ricariche', premium: 'Commissioni ridotte*', start: 'Funzioni essenziali', under18: 'Con il supporto del tutore' },
  { group: 'Risparmio e investimenti', label: 'Conto Deposito', premium: 'Fino al 3,20%*', start: 'Fino al 2,60%*', under18: '—' },
  { group: 'Risparmio e investimenti', label: 'Conto Titoli', premium: '0,17%*', start: '0,20%*', under18: '—' },
  { group: 'Risparmio e investimenti', label: 'Cripto', premium: 'Commissioni ridotte*', start: 'Commissioni standard*', under18: '—' },
  { group: 'Vantaggi e supporto', label: 'Power', premium: 'Fino a 100 €*', start: 'Fino a 50 €*', under18: '—' },
  { group: 'Vantaggi e supporto', label: 'Invita un amico', premium: '40 €*', start: '20 €*', under18: '20 €*' },
  { group: 'Vantaggi e supporto', label: 'Assistenza', premium: 'Dedicata*', start: 'Tinaba', under18: 'Tinaba e tutore' },
];
export const communityPathways = [
  {
    eyebrow: 'Per organizzazioni e progetti',
    title: 'Conto e carta brandizzati',
    text: 'Costruisci un’esperienza riconoscibile per le persone della tua community, con strumenti e contenuti coerenti con il tuo progetto.',
    href: '/soluzioni/',
    label: 'Scopri le soluzioni',
    tone: 'dark',
  },
  {
    eyebrow: 'Per premiare la partecipazione',
    title: 'Contenuti esclusivi',
    text: 'Dedica promozioni, contenuti e iniziative alla tua community, con una relazione più diretta.',
    href: '/news/',
    label: 'Scopri le iniziative',
    tone: 'orange',
  },
  {
    eyebrow: 'Per una causa che conta',
    title: 'Charity per i progetti',
    text: 'Crea una raccolta o un Negozio Solidale per sostenere un’iniziativa attraverso l’App Tinaba.',
    href: '/community/charity/',
    label: 'Scopri Charity',
    tone: 'light',
  },
];
export const charitySteps = [
  {
    number: '01',
    title: 'Raccolte solidali',
    text: 'Dai forma a una raccolta per un ente, un progetto o una causa che ti sta a cuore.',
    image: '/assets/community/charity-collection.png',
    alt: 'Illustrazione di persone che partecipano a una raccolta attraverso lo smartphone',
  },
  {
    number: '02',
    title: 'Negozi solidali',
    text: 'Collega la tua missione a prodotti e iniziative che possono sostenerla.',
    image: '/assets/community/charity-store.png',
    alt: 'Anteprima di un negozio solidale nell’app Tinaba',
  },
  {
    number: '03',
    title: 'Una pagina da condividere',
    text: 'Raccogli le informazioni dell’iniziativa in uno spazio semplice da raccontare.',
    image: '/assets/community/charity-fundraising.png',
    alt: 'Anteprima di una raccolta fondi nell’app Tinaba',
  },
];
