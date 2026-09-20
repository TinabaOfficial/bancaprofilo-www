import { defineEditorialPages } from './types';
import { siteConfig } from '../../config/site';

export const institutionalPages = defineEditorialPages('institutional', [
  {
    slug: 'chi-siamo', eyebrow: 'Il nostro mondo', title: 'La tecnologia, con una responsabilità precisa.',
    intro: 'Tinaba nasce per rendere più semplice il rapporto quotidiano con il denaro, con una distinzione chiara tra banca e tecnologia.',
    summary: 'Banca Profilo è la banca; Tinaba offre la piattaforma e il supporto tecnologico che rendono disponibili i servizi nell’App.',
    sections: [
      { title: 'Banca Profilo', body: 'Banca Profilo è una banca indipendente specializzata nella gestione del patrimonio complessivo dei propri clienti, con consulenze e soluzioni personalizzate.' },
      { title: 'Tinaba', body: 'Banca Profilo offre i suoi servizi avvalendosi della piattaforma e del supporto tecnologico dell’outsourcer Tinaba.' },
      { title: 'Dati societari — Banca Profilo', body: 'Banca Profilo S.p.A. — P. IVA 09108700155, Via Cerva 28, 20122 Milano (MI).' },
      { title: 'Dati societari — Tinaba', body: 'Tinaba S.p.A. — P. IVA 09158950965, REA MI 2072562, Via Cerva 28, 20122 Milano (MI).' },
    ],
    image: { src: '/assets/reference/chi-siamo.png', alt: 'Illustrazione istituzionale Tinaba e Banca Profilo' },
  },
  {
    slug: 'banca-profilo', eyebrow: 'Banca Profilo', title: 'Solidità e sicurezza per il tuo denaro.',
    intro: 'Banca Profilo integra i propri prodotti bancari e finanziari nell’App Tinaba.',
    summary: 'Una banca indipendente specializzata nella gestione del patrimonio complessivo dei propri clienti.',
    sections: [
      { title: 'Una banca indipendente', body: 'Quotata in Borsa, Banca Profilo offre consulenze e soluzioni personalizzate per privati e imprenditori.' },
      { title: 'Insieme a Tinaba', body: 'Ascolto, trasparenza e indipendenza sono i pilastri del rapporto tra la banca, la piattaforma Tinaba e le persone.' },
    ],
    image: { src: '/assets/brand/banca-profilo.svg', alt: 'Logo Banca Profilo' },
  },
  {
    slug: 'community', eyebrow: 'Community', title: 'Porta la tua Community sull’App Tinaba.',
    intro: 'Un’esperienza digitale per organizzazioni, progetti e persone che vogliono stare più vicini.',
    summary: 'Dai visibilità alle tue iniziative, crea occasioni di partecipazione e sostieni i progetti che contano.',
    sections: [
      { title: 'Un’esperienza riconoscibile', body: 'Costruisci un percorso più vicino alle persone della tua organizzazione, con soluzioni e contenuti coerenti con il tuo progetto.' },
      { title: 'Uno spazio per partecipare', body: 'Rendi accessibili iniziative, vantaggi e informazioni in un unico spazio digitale, senza disperdere l’attenzione.' },
      { title: 'Il valore delle persone', body: 'Dalla charity all’Ambassador Program, scegli il modo più adatto per far crescere una community attiva e consapevole.' },
    ],
  },
  {
    slug: 'community/charity', eyebrow: 'Charity', title: 'Fare del bene non è mai stato così semplice.',
    intro: 'Avvia una raccolta di charity o crea un Negozio Solidale per devolvere il ricavato a una causa che ti sta a cuore.',
    summary: 'Crea la tua iniziativa di Charity direttamente dall’App Tinaba.',
    sections: [
      { title: 'Raccolte e negozi solidali', body: 'Sostieni progetti e associazioni attraverso raccolte e contributi digitali.' },
      { title: 'Iniziative', body: 'Tra le raccolte presenti nel mirror: Fondazione Il Fatto Quotidiano, Fondazione Roberta Mucera, Portofranco Milano e City Angels Milano.' },
    ],
  },
  {
    slug: 'community/wishope', eyebrow: 'WISHOPe', title: 'Fai un regalo e cambia il domani di qualcuno.',
    intro: 'Una piattaforma che unisce tecnologia, aziende, associazioni e persone per dare ai gesti semplici un valore straordinario.',
    summary: 'Il primo e-shop per fare un regalo a chi ne ha bisogno.',
    sections: [
      { title: 'Un sorriso ai meno fortunati', body: 'Scegli un regalo solidale e contribuisci a un progetto concreto.' },
      { title: 'Come partecipare', body: 'Aziende, associazioni e persone possono partecipare con prodotti, iniziative e donazioni.' },
    ],
  },
  {
    slug: 'community/ambassador', eyebrow: 'Community', title: 'Tinaba Ambassador Program: fatti sentire!',
    intro: 'Entra nel Programma Ambassador e aiuta a far crescere la Community, con una ricompensa legata alla partecipazione.',
    summary: 'Una community dinamica per condividere idee e diffondere la cultura finanziaria.',
    sections: [
      { title: 'Una community coinvolgente', body: 'Condividi idee e aiutaci a diffondere la cultura finanziaria.' },
      { title: 'Ricompense', body: 'Le ricompense aumentano in base alla partecipazione, secondo i criteri del programma.' },
      { title: 'Candidatura', body: 'Compila il form ufficiale con i tuoi dati, i canali che userai e il modo in cui vuoi raccontare Tinaba di Banca Profilo. La candidatura è soggetta alla verifica dei requisiti del programma.' },
    ],
    cta: { label: 'Compila il form Ambassador', href: siteConfig.destinations.ambassador },
  },
  {
    slug: 'chi-siamo/valori', eyebrow: 'I nostri valori', title: 'Evolvere gli strumenti, conservare entusiasmo e dedizione.',
    intro: 'Un’esperienza di gestione del denaro accessibile a chiunque, con tecnologia e entusiasmo per la nostra missione.',
    summary: 'Sharing money, educazione finanziaria, sicurezza e progetti di valore.',
    sections: [
      { title: 'Sharing money', body: 'Andare oltre la sharing economy con strumenti per condividere e collaborare.' },
      { title: 'Educazione finanziaria', body: 'Rendere le persone più consapevoli delle proprie decisioni economiche.' },
      { title: 'Sicurezza prima di tutto', body: 'Proteggere dati, operazioni e persone con strumenti e comportamenti corretti.' },
    ],
  },
  {
    slug: 'chi-siamo/storia', eyebrow: 'La storia', title: 'Devoti alla gestione facile e trasparente del denaro.',
    intro: 'Tinaba nasce con l’ambizione di integrare tecnologia e prodotti finanziari di Banca Profilo per una gestione semplice, chiara e completamente digitale.',
    summary: 'Un percorso di evoluzioni di prodotto, partnership e tecnologia al servizio del sistema bancario.',
    sections: [
      { title: 'Una pioniera italiana', body: 'Tinaba nasce con il supporto del fondo Sator e in integrazione con Banca Profilo.' },
      { title: 'Evolvere insieme', body: 'Partnership di rilievo, ampliamento del team e nuovi servizi hanno costruito il percorso della piattaforma.' },
      { title: 'Il prossimo passo', body: 'Costruire il domani del fintech mantenendo semplice e trasparente la gestione del denaro.' },
    ],
  },
  {
    slug: 'stampa', eyebrow: 'Area stampa', title: 'Tinaba di Banca Profilo, in breve.',
    intro: 'Materiali, contesto e riferimenti per chi racconta l’innovazione nei servizi finanziari.',
    summary: 'Tinaba è la piattaforma tecnologica e operativa; Banca Profilo è il soggetto bancario titolare dei servizi bancari.',
    sections: [
      { title: 'Il progetto', body: 'Un’esperienza digitale per gestire, condividere e orientare il denaro con maggiore semplicità.' },
      { title: 'I ruoli', body: 'Ogni comunicazione deve distinguere chiaramente il ruolo bancario di Banca Profilo da quello tecnologico e operativo di Tinaba.' },
      { title: 'Richieste stampa', body: 'Per richieste stampa e partnership editoriali scrivi a info@tinaba.it indicando testata, tema, scadenza e recapito.' },
    ],
    links: [{ label: 'Chi siamo', href: '/chi-siamo/' }, { label: 'Banca Profilo', href: '/banca-profilo/' }, { label: 'Scarica il comunicato Tinaba e IULM', href: '/documents/CS-Tinaba-x-IULM-comunicato-stampa.pdf' }],
    image: { src: '/assets/press/area-stampa-banner.png', alt: 'Area stampa Tinaba e Banca Profilo' },
  },
]);
