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

const onboarding = 'https://onboarding.bancaprofilo.it/#/';

export const editorialPages: EditorialPage[] = [
  {
    slug: 'carta', eyebrow: 'Pagare', title: 'La tua carta per pagare ovunque.',
    intro: 'Ottieni una carta prepagata collegata al tuo conto per pagare dove, quando e come vuoi. Ricaricala, controlla movimenti e spese direttamente dalla tua App.',
    summary: 'Una carta Mastercard prepagata collegata al conto Banca Profilo, gestita nell’App Tinaba.',
    sections: [
      { title: 'Una carta per il quotidiano', body: 'La carta fisica può essere richiesta in fase di registrazione o in un secondo momento al costo di 7,99€. I primi 12 prelievi in tutta l’Unione Europea sono gratuiti.' },
      { title: 'A portata di App', body: 'Ricarica la carta dal conto corrente, da un Salvadanaio o da uno dei tuoi Gruppi Tinaba. Per non pagare commissioni, ricarica più di 20€.' },
      { title: 'Semplice e sicura', body: 'Trovi in App il riepilogo dei movimenti e confermi le operazioni con codice o riconoscimento facciale. Per gli acquisti online è disponibile il 3D Secure.' },
    ],
    cta: { label: 'Apri il conto', href: onboarding },
    image: { src: '/assets/reference/carta-app.png', alt: 'App Tinaba con carta prepagata e pagamenti digitali' },
  },
  {
    slug: 'condivisione', eyebrow: 'Condividere', title: 'Le spese insieme, senza complicazioni.',
    intro: 'Gruppi e raccolte per organizzare il denaro condiviso con le persone che contano.',
    summary: 'Dalle spese di casa a un viaggio: una vista comune aiuta a capire chi ha pagato e cosa resta da fare.',
    sections: [
      { title: 'Gruppi', body: 'Crea un gruppo, invita le persone e gestisci insieme le spese condivise.' },
      { title: 'Raccolte', body: 'Raccogli contributi in modo ordinato, con modalità operative e responsabilità leggibili per tutti.' },
    ],
  },
  {
    slug: 'risparmio', eyebrow: 'Risparmiare', title: 'Dai una direzione ai tuoi soldi.',
    intro: 'Obiettivi e strumenti per costruire il tuo modo di risparmiare con più consapevolezza.',
    summary: 'Un percorso che collega Salvadanaio, risparmio e Conto Deposito.',
    sections: [
      { title: 'Obiettivi concreti', body: 'Un obiettivo rende più leggibile il percorso: quanto vuoi mettere da parte e per cosa.' },
      { title: 'Conto Deposito', body: 'Scopri la soluzione di Banca Profilo disponibile nell’App Tinaba.' },
    ],
  },
  {
    slug: 'risparmio/conto-deposito', eyebrow: 'Risparmiare', title: 'Fino al 3,20% con il Conto Deposito.',
    intro: 'Scopri una soluzione per i tuoi risparmi a partire da 1.000€, con condizioni, durata e documentazione da verificare prima di aderire.',
    summary: 'Il Conto Deposito di Banca Profilo è disponibile nell’App Tinaba.',
    sections: [
      { title: 'Scopri la promozione', body: 'Fino al 3,20% di interessi sui tuoi risparmi. L’offerta è soggetta a durata, condizioni e documentazione informativa.' },
      { title: 'Prima di scegliere', body: 'Consulta il documento informativo per conoscere durata, disponibilità delle somme, costi, fiscalità e condizioni applicabili.' },
    ],
    cta: { label: 'Apri il conto', href: onboarding },
    image: { src: '/assets/reference/conto-deposito.png', alt: 'Anteprima del Conto Deposito nell’App Tinaba' },
    links: [{ label: 'Documento informativo Conto Deposito', href: '/documents/FI-e-DDS-Deposito-Vincolato-settembre-ottobre-2026.pdf' }],
  },
  {
    slug: 'investimenti', eyebrow: 'Investire', title: 'Più consapevolezza nelle tue scelte.',
    intro: 'Informazioni ordinate per orientarti tra roboadvisor, conto titoli e altri strumenti.',
    summary: 'Il Conto Titoli è il servizio investimenti di Tinaba di Banca Profilo: strumenti e informazioni per scegliere in autonomia.',
    sections: [
      { title: 'Scegli con consapevolezza', body: 'Scegli come investire in base ai tuoi obiettivi e al tuo profilo.' },
      { title: 'Selezione accurata degli ISIN', body: 'Accedi a una selezione di strumenti identificati da codici ISIN e a informazioni utili per le tue decisioni.' },
      { title: 'Trasparenza', body: 'Costi, rischi e condizioni devono essere letti nella documentazione informativa prima di operare. Nessun risultato è garantito.' },
    ],
  },
  {
    slug: 'investimenti/cripto', eyebrow: 'Investire', title: 'Acquista, vendi e custodisci cripto.',
    intro: 'Scegli le tue criptovalute dall’App Tinaba e acquistale a partire da 25€.',
    summary: 'Nove criptovalute disponibili in App: Bitcoin, Bitcoin Cash, Ethereum, Litecoin, Polygon (MATIC), Ripple, Zcash, Solana e Cardano.',
    sections: [
      { title: 'Scegli le tue criptovalute', body: 'Acquista quando vuoi a partire da 25€ le cripto che preferisci, in real time.' },
      { title: 'Controlla il tuo portafoglio', body: 'Monitora l’andamento delle tue criptovalute e gestisci le operazioni direttamente nell’App.' },
      { title: 'Rischi e informazioni', body: 'Le criptovalute sono strumenti ad alto rischio e il loro valore può variare significativamente. Leggi costi, condizioni e documentazione prima di operare.' },
    ],
  },
  {
    slug: 'pagamenti/mondiali', eyebrow: 'Viaggiare', title: 'Ovunque tu vada, portaci con te.',
    intro: 'Pagamenti mondiali con la carta Mastercard virtuale e fisica gestita dall’App Tinaba.',
    summary: 'Usa la carta per i pagamenti nel mondo e controlla movimenti e spese direttamente dall’App.',
    sections: [
      { title: 'Pagamenti nel mondo', body: 'Usa la carta Mastercard per i pagamenti internazionali e porta con te la tua App.' },
      { title: 'Carta fisica o virtuale', body: 'Richiedi la carta fisica al costo di 7,99€ una tantum e scegli lo stile disponibile in App.' },
    ],
  },
  {
    slug: 'pagamenti/alipay-plus', eyebrow: 'Viaggiare', title: 'Paga in viaggio con Alipay+.',
    intro: 'Porta la tua App Tinaba con te e paga in euro nei negozi che aderiscono al circuito Alipay+.',
    summary: 'Un’esperienza di pagamento digitale pensata per rendere più semplice muoversi in Italia e all’estero.',
    sections: [
      { title: 'Pagamenti in euro dall’App', body: 'Grazie all’integrazione tra Tinaba, Banca Profilo e Alipay+, puoi pagare direttamente dalla tua App Tinaba in euro e in italiano, secondo le modalità disponibili del servizio.' },
      { title: 'Più libertà quando viaggi', body: 'Usa il servizio nei negozi che espongono il logo Alipay+ e scopri una rete internazionale in continua espansione, senza dover installare app locali.' },
      { title: 'Tinaba e Banca Profilo', body: 'Tinaba abilita l’esperienza digitale; Banca Profilo è il soggetto bancario di riferimento. Disponibilità, condizioni e modalità operative sono quelle comunicate nei documenti e nell’App.' },
    ],
    cta: { label: 'Apri il conto', href: onboarding },
    links: [{ label: 'Scopri Alipay+', href: 'https://www.alipayplus.com/mobile-payment-provider-list' }],
  },
  {
    slug: 'piani', eyebrow: 'Scegli il tuo ritmo', title: 'Confronta i piani.',
    intro: 'Scegli l’opzione più adatta al tuo modo di gestire il denaro.',
    summary: 'Tre piani per partire da ciò che ti serve oggi.',
    sections: [
      { title: 'Premium — da 3,99€/mese', body: 'Scegli tra 49,99€/anno o 5,99€/mese, scontabile fino a 2€ al mese tramite cashback: 1€ con accredito dello stipendio e 1€ con due addebiti diretti.' },
      { title: 'Start — 0,00€/mese', body: 'La base per gestire il quotidiano con il conto e gli strumenti Tinaba.' },
      { title: 'Under 18 — 0,00€/mese', body: 'Un primo passo verso l’autonomia, con le tutele e le responsabilità previste per i minori.' },
    ],
    cta: { label: 'Apri il conto', href: onboarding },
  },
  {
    slug: 'piani/start', eyebrow: 'Piano Start', title: 'Conto, carta, App e non solo!',
    intro: 'Scopri la comodità di avere a portata di App tutti gli strumenti per gestire il denaro in semplicità e sicurezza nell’esperienza Tinaba di Banca Profilo.',
    summary: 'Il piano Start include conto con IBAN italiano e carta prepagata Mastercard.',
    sections: [
      { title: 'Conto e carta Mastercard', body: 'Conto con IBAN italiano e una carta prepagata Mastercard. Costi, condizioni e documentazione sono disponibili prima di scegliere.' },
      { title: 'Bolli, bollettini e ricariche', body: 'Paga bolli e bollettini, ricarica il tuo smartphone, acquista Gift Card e attiva gli addebiti diretti.' },
      { title: 'Pagamenti senza frontiere', body: 'Paga in giro per il mondo dalla tua App.' },
    ],
    cta: { label: 'Apri il conto', href: onboarding },
  },
  {
    slug: 'piani/premium', eyebrow: 'Piano Premium', title: 'Aggiungi vantaggi al tuo conto.',
    intro: 'La membership Premium offre risparmio sulle commissioni, servizi riservati e sconti su più di 500 brand.',
    summary: 'Più libertà nelle operazioni e vantaggi dedicati, secondo le condizioni del piano.',
    sections: [
      { title: 'Risparmia con Power', body: 'Ricevi fino a 100€ di credito da spendere per le commissioni in App, secondo le condizioni applicabili.' },
      { title: 'Sconti e meno commissioni', body: 'Accedi a un portale con offerte e sconti e risparmia sulle commissioni di cripto e Conto Titoli.' },
      { title: 'Assistenza dedicata', body: 'Prenota il tuo appuntamento in App e accedi a un’assistenza riservata.' },
    ],
    cta: { label: 'Apri il conto', href: onboarding },
  },
  {
    slug: 'piani/under18', eyebrow: 'Under 18', title: 'Conto e carta per chi ha meno di 18 anni.',
    intro: 'A partire dai 12 anni puoi aprire un conto gratuito e ricevere una carta prepagata, con l’approvazione di un tutore e l’attivazione del parental control.',
    summary: 'Un primo passo verso l’autonomia, con strumenti pensati per minori e famiglie.',
    sections: [
      { title: 'Conto Under 18', body: 'A partire dai 12 anni puoi aprire un conto pensato per iniziare a gestire il denaro, con condizioni dedicate al profilo Under 18.' },
      { title: 'Carta prepagata', body: 'Ricevi una carta ricaricabile istantaneamente dal tuo conto o dai tuoi Gruppi, utilizzabile in Italia secondo le condizioni applicabili.' },
      { title: 'Parental control', body: 'Il conto può essere aperto solo con l’autorizzazione di un tutore, che può tenere traccia dei movimenti.' },
    ],
    cta: { label: 'Scopri come funziona', href: '/assistenza/' },
  },
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
    slug: 'business', eyebrow: 'Business', title: 'Il conto per attività e aziende.',
    intro: 'Con il conto business di Banca Profilo puoi accettare pagamenti online, a distanza e senza POS, con il supporto della piattaforma Tinaba.',
    summary: 'Strumenti digitali per incassare e gestire i pagamenti della tua attività.',
    sections: [
      { title: 'Incassa senza POS', body: 'Accetta pagamenti anche senza un terminale fisico, usando gli strumenti disponibili nell’ecosistema Tinaba.' },
      { title: 'Incassa online', body: 'Aggiungi l’App Tinaba alle opzioni di pagamento del tuo e-commerce con un’integrazione supportata dal team.' },
      { title: 'Incassa a distanza', body: 'Gestisci richieste di pagamento e relazioni con i tuoi clienti attraverso canali digitali.' },
    ],
    cta: { label: 'Apri il conto Business', href: 'https://business.tinaba.it/' },
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
    slug: 'assistenza', eyebrow: 'Siamo qui', title: 'Possiamo aiutarti?',
    intro: 'Assistenza, sicurezza e manuali in un percorso semplice da seguire per privati e business.',
    summary: 'Per assistenza telefonica chiama il Numero Verde 800 694 950, dal lunedì al venerdì dalle 09:00 alle 17:00.',
    sections: [
      { title: 'App e conto', body: 'Trova risposte su conto Banca Profilo, bonifici istantanei e ricariche.' },
      { title: 'Carta e Conto Deposito', body: 'Consulta le domande frequenti su carta virtuale, pagamenti, prelievi, durata del vincolo e rinnovo.' },
      { title: 'Contatti', body: 'Per richieste generiche scrivi a info@tinaba.it. Non inviare mai dati riservati via email.' },
    ],
    links: [{ label: 'Chiama 800 694 950', href: 'tel:800694950' }, { label: 'Scrivi a info@tinaba.it', href: 'mailto:info@tinaba.it' }],
  },
  {
    slug: 'documenti', eyebrow: 'Trasparenza', title: 'Documenti chiari, prima di scegliere.',
    intro: 'Documenti legali, trasparenza bancaria e canali formali in un unico punto.',
    summary: 'Qui trovi i documenti informativi previsti per i servizi offerti da Banca Profilo attraverso l’App Tinaba.',
    sections: [
      { title: 'Trasparenza bancaria', body: 'Le condizioni contrattuali ed economiche di questa sezione si riferiscono ai prodotti bancari offerti da Banca Profilo attraverso il canale digitale Tinaba. Per i prodotti sottoscritti in filiale fanno fede i documenti pubblicati sul sito di Banca Profilo.' },
      { title: 'Prima di scegliere', body: 'Consulta fogli informativi, costi, limiti, rischi e requisiti del servizio che ti interessa. I documenti aggiornati prevalgono su qualsiasi sintesi editoriale.' },
      { title: 'Sicurezza e reclami', body: 'Per un’operazione non autorizzata usa il modulo dedicato; per un reclamo formale segui i tempi e i canali indicati nella pagina Reclami e disconoscimenti.' },
    ],
    links: [
      { label: 'Informativa precontrattuale sui servizi a distanza', href: '/documents/Informativa-precontrattuale-servizi-a-distanza.pdf' },
      { label: 'Informazioni ai depositanti', href: '/documents/Informazioni-ai-depositanti.pdf' },
      { label: 'Foglio informativo Clienti Consumer', href: '/documents/Foglio-informativo-Clienti-Consumer.pdf' },
      { label: 'Foglio informativo Clienti Business', href: '/documents/Foglio-informativo-Clienti-Business.pdf' },
      { label: 'Carta prepagata contrattualizzata — Minorenni', href: '/documents/Carta-Prepagata-Contrattualizzata-Minorenni.pdf' },
      { label: 'Informativa precontrattuale Conto Titoli', href: '/documents/Informativa-precontrattuale-Conto-Titoli.pdf' },
      { label: 'Conto Deposito Vincolato — settembre/ottobre 2026', href: '/documents/FI-e-DDS-Deposito-Vincolato-settembre-ottobre-2026.pdf' },
      { label: 'Guida all’Arbitro Bancario Finanziario', href: '/documents/Guida-Arbitro-Bancario-Finanziario.pdf' },
      { label: 'Informativa MiCAR', href: '/documents/Informativa-MiCAR.pdf' },
      { label: 'Informativa Privacy Banca Profilo — luglio 2026', href: '/documents/Privacy-policy-Banca-Profilo-luglio-2026.pdf' },
      { label: 'Informativa Privacy del sito', href: '/documents/Privacy-policy_V0926.pdf' },
      { label: 'Modulo disconoscimento operazioni non autorizzate', href: '/documents/Modulo-disconoscimento-operazioni-non-autorizzate.pdf' },
      { label: 'Manuale d’uso Business Alipay+', href: '/documents/Manuale-uso-Business-Alipay.pdf' },
      { label: 'Reclami e disconoscimenti', href: '/documenti/reclami/' },
    ],
  },
  {
    slug: 'accessibilita', eyebrow: 'Accessibilità', title: 'Un sito per tutte le persone.',
    intro: 'Accessibilità, tastiera, contrasto e contenuti comprensibili sono requisiti del progetto.',
    summary: 'Dichiarazioni di accessibilità per App e sito web Tinaba.',
    sections: [
      { title: 'Dichiarazione App', body: 'La dichiarazione di accessibilità dell’App Tinaba è disponibile per la consultazione.' },
      { title: 'Dichiarazione Web', body: 'La dichiarazione di accessibilità del sito Tinaba è disponibile per la consultazione.' },
    ],
    links: [
      { label: 'Dichiarazione di accessibilità App', href: '/documents/Dichiarazione-di-accessibilita-APP-Tinaba.pdf' },
      { label: 'Dichiarazione di accessibilità Web', href: '/documents/Dichiarazione-di-accessibilita-Web-Tinaba.pdf' },
    ],
  },
  {
    slug: 'privacy', eyebrow: 'Privacy', title: 'La tua privacy, senza ambiguità.',
    intro: 'Il sito pubblico usa Cookiebot per raccogliere e documentare le preferenze sui cookie e Google Tag Manager per gestire i tag autorizzati.',
    summary: 'Le categorie, i fornitori e le finalità effettivamente attivi sono quelli mostrati dal pannello Cookiebot e dalla configurazione pubblicata.',
    sections: [
      { title: 'Titolare e servizi', body: 'Per i servizi bancari e finanziari offerti attraverso l’App Tinaba, Banca Profilo è il soggetto bancario di riferimento e Tinaba abilita la piattaforma e il supporto tecnologico. Per i trattamenti del sito valgono i documenti e i ruoli indicati nell’informativa pubblicata.' },
      { title: 'Informativa completa', body: 'Leggi l’informativa privacy aggiornata prima di utilizzare i servizi o inviare richieste. La versione pubblicata indica titolare, finalità, basi giuridiche, conservazione, destinatari e diritti.' },
      { title: 'Preferenze cookie', body: 'Cookiebot consente di accettare, rifiutare o modificare le categorie non necessarie. Google Tag Manager deve rispettare la scelta registrata e non attivare tag non autorizzati.' },
    ],
    links: [
      { label: 'Informativa Privacy Banca Profilo — luglio 2026', href: '/documents/Privacy-policy-Banca-Profilo-luglio-2026.pdf' },
      { label: 'Informativa Privacy del sito — settembre 2026', href: '/documents/Privacy-policy_V0926.pdf' },
      { label: 'Impostazioni cookie', href: '/cookie/' },
    ],
  },
  {
    slug: 'cookie', eyebrow: 'Cookie', title: 'Informativa sui cookie',
    intro: 'Cookiebot raccoglie le tue preferenze; Google Tag Manager carica solo i tag consentiti dalla configurazione pubblicata.',
    summary: 'Il sito usa cookie tecnici necessari e, solo quando previsto e consentito, categorie funzionali o statistiche dichiarate nel pannello Cookiebot.',
    sections: [
      { title: 'Cosa sono', body: 'A ogni visita successiva, i cookie possono essere reinviati al sito che li ha originati, nel caso di cookie di prima parte, oppure a un altro sito che li riconosce, nel caso di cookie di terze parti. Possono consentire di navigare tra le pagine, ricordare preferenze e migliorare l’esperienza; in base alla funzione possono essere tecnici, funzionali, statistici o di profilazione.' },
      { title: 'Cookie tecnici', body: 'Sono necessari per il funzionamento del sito e per ricordare la scelta espressa nel pannello Cookiebot. Categoria, fornitore e durata devono restare allineati alla configurazione effettivamente pubblicata.' },
      { title: 'Categorie opzionali', body: 'Cookie funzionali, statistici o di profilazione possono essere attivati solo dopo una scelta informata. Le categorie disponibili, i fornitori e le finalità sono mostrati da Cookiebot.' },
      { title: 'Google Tag Manager', body: 'Google Tag Manager è utilizzato come contenitore tecnico per i tag autorizzati. Non deve attivare analytics, advertising o altri servizi prima del consenso richiesto.' },
      { title: 'Modificare la scelta', body: 'Puoi modificare o revocare le preferenze dal pannello Cookiebot oppure dalle impostazioni del browser. Ogni modifica sostanziale del runtime richiede l’aggiornamento di questa informativa.' },
    ],
    links: [
      { label: 'Informativa privacy del sito', href: '/privacy/' },
      { label: 'Informativa Privacy completa', href: '/documents/Privacy-policy_V0926.pdf' },
    ],
  },
  {
    slug: 'wallet', eyebrow: 'Conto', title: 'Tecnologia evoluta, affidabilità bancaria.',
    intro: 'Un conto corrente con IBAN italiano senza canone fisso e imposta di bollo per gestire spese, investimenti e risparmi da una sola App.',
    summary: 'I prodotti di Banca Profilo disponibili nell’App Tinaba per gestire il denaro quotidiano.',
    sections: [
      { title: 'Trasferimenti istantanei', body: 'Invia e richiedi denaro ai tuoi contatti direttamente dall’App, secondo le modalità disponibili.' },
      { title: 'Bonifici illimitati', body: 'Ottieni un IBAN italiano e ricevi o invia bonifici dall’App. Con Premium i bonifici gratuiti sono illimitati.' },
      { title: 'Bolli, bollettini e PagoPA', body: 'Paga in App utenze, bollettini, MAV/RAV e PagoPA.' },
    ],
    cta: { label: 'Apri il conto', href: onboarding },
  },
  {
    slug: 'pagamenti/trasferimenti', eyebrow: 'Pagamenti', title: 'Trasferisci denaro in pochi tap.',
    intro: 'Gestisci pagamenti peer-to-peer, bonifici bancari e altre modalità di trasferimento in modo semplice, veloce e sicuro.',
    summary: 'Invia, ricevi e condividi denaro in tempo reale dall’App Tinaba.',
    sections: [
      { title: 'Invia e richiedi denaro', body: 'Scegli un contatto e trasferisci denaro in un tap, oppure richiedi una somma.' },
      { title: 'Bonifici veloci e sicuri', body: 'Gestisci i bonifici dal tuo IBAN italiano direttamente dall’App.' },
      { title: 'Paghetta Smart', body: 'Aiuta i minori a imparare a gestire il denaro con trasferimenti programmati.' },
    ],
  },
  {
    slug: 'condivisione/gruppi', eyebrow: 'Condividere', title: 'Semplifica le spese condivise.',
    intro: 'Gestisci le spese di gruppo senza stress e collabora in modo trasparente con famiglia, amici e colleghi.',
    summary: 'Un unico spazio per dividere spese di casa, viaggi e attività condivise.',
    sections: [
      { title: 'Casa e convivenza', body: 'Dividete affitto, bollette e spese ricorrenti della convivenza.' },
      { title: 'Viaggi', body: 'Organizzate hotel, auto a noleggio, escursioni e tutte le spese del viaggio.' },
      { title: 'Tutto a portata di tap', body: 'Invia, ricevi e condividi denaro in tempo reale, con una vista trasparente per il gruppo.' },
    ],
  },
  {
    slug: 'condivisione/raccolte', eyebrow: 'Condividere', title: 'Anticipare non significa pagare per tutti.',
    intro: 'Raccogli soldi da contatti, amici e conoscenti in pochi istanti grazie alle Raccolte Flash e alle Raccolte Fondi.',
    summary: 'Una soluzione per recuperare quote, dividere una spesa o sostenere un progetto.',
    sections: [
      { title: 'Raccolta Fondi', body: 'Recupera le quote in pochi tap e segui l’andamento della raccolta.' },
      { title: 'Raccolta Flash', body: 'Dividi e paga una spesa in un lampo, senza dover anticipare tutto.' },
      { title: 'Charity', body: 'Crea la tua iniziativa di Charity e raccogli contributi per il progetto che ti sta a cuore.' },
    ],
  },
  {
    slug: 'risparmio/salvadanaio', eyebrow: 'Risparmiare', title: 'Salvadanai: il risparmio alla portata di tutti.',
    intro: 'Metti da parte nel tempo e raggiungi i tuoi obiettivi finanziari in maniera semplice e gratuita.',
    summary: 'Scegli come risparmiare e costruisci un percorso adatto ai tuoi obiettivi.',
    sections: [
      { title: 'Scegli come risparmiare', body: 'Crea un Salvadanaio e accantona denaro con il metodo che preferisci.' },
      { title: 'Educazione finanziaria', body: 'Capire meglio le proprie scelte è il primo passo per dare una direzione ai propri risparmi.' },
      { title: 'Anche per tuo figlio', body: 'Un modo semplice per accompagnare i più giovani verso una maggiore autonomia.' },
    ],
  },
  {
    slug: 'investimenti/roboadvisor', eyebrow: 'Investire', title: 'Il tuo denaro ha una nuova intelligenza.',
    intro: 'Banca Profilo porta l’AI nella gestione dei tuoi investimenti con decisioni e strategie più evolute e aggiornate.',
    summary: 'Portafogli dinamici, PAC e gestione digitale con la competenza di Banca Profilo.',
    sections: [
      { title: 'Portafogli dinamici', body: 'L’AI di Sphere entra nel processo di investimento per una nuova generazione di portafogli dinamici e adattivi.' },
      { title: 'Gestisci in libertà', body: 'Investi a partire da 2.000€, modifica l’importo quando vuoi e metti in pausa l’investimento.' },
      { title: 'Investi gradualmente', body: 'Con la modalità PAC puoi effettuare versamenti mensili a partire da 50€.' },
      { title: 'Cambia profilo', body: 'Scegli tra 8 portafogli in ETF creati dal team di professionisti di Banca Profilo e cambialo quando vuoi.' },
    ],
  },
  {
    slug: 'investimenti/conto-titoli', eyebrow: 'Investire', title: 'Investi con il Conto Titoli.',
    intro: 'Una soluzione per chi desidera investire con autonomia e semplicità, supportato dalla competenza di un team di specialisti.',
    summary: 'Strumenti e informazioni per gestire gli investimenti direttamente dall’App.',
    sections: [
      { title: 'Tutto in una sola App', body: 'Dall’apertura del conto alla gestione degli investimenti, trovi gli strumenti disponibili direttamente nell’App.' },
      { title: 'Selezione degli ISIN', body: 'Gli ISIN acquistabili cambiano nel tempo tenendo conto della view macroeconomica e dei trend di mercato.' },
      { title: 'Semplice e intuitivo', body: 'Accedi e acquista strumenti finanziari tramite un’interfaccia intuitiva. Banca Profilo agisce anche come sostituto d’imposta.' },
      { title: 'Trasparenza', body: 'Consulta in App costi, performance e caratteristiche dei titoli prima di operare.' },
    ],
  },
  {
    slug: 'pagamenti/apple-pay', eyebrow: 'Smart payment', title: 'Pagare con Apple Pay è più facile.',
    intro: 'Aggiungi la tua carta Tinaba ad Apple Pay e paga in modo semplice e sicuro con i dispositivi compatibili.',
    summary: 'Pagamenti contactless con iPhone e Apple Watch nei negozi, nelle app e online.',
    sections: [
      { title: 'Paga in un istante', body: 'Avvicina il dispositivo al POS contactless e conferma con Touch ID o Face ID.' },
      { title: 'I tuoi dati al sicuro', body: 'Il numero della carta non viene condiviso con il negozio durante il pagamento.' },
    ],
  },
  {
    slug: 'pagamenti/google-pay', eyebrow: 'Smart payment', title: 'Fai acquisti in tutto il mondo con il tuo smartphone.',
    intro: 'Paga in un istante comodamente dal tuo smartphone Android compatibile.',
    summary: 'Google Pay protegge le informazioni di pagamento e non condivide il numero della tua carta.',
    sections: [
      { title: 'Pagamenti semplici', body: 'Grazie alla tecnologia contactless paghi in modo veloce nei negozi e online.' },
      { title: 'Sempre con te', body: 'La carta resta collegata allo smartphone così puoi pagare anche senza portafoglio.' },
    ],
  },
  {
    slug: 'pagamenti/american-express', eyebrow: 'Partnership', title: 'Richiedi una Carta American Express.',
    intro: 'Comodità, sicurezza e vantaggi legati al mondo lifestyle. Scopri i servizi dedicati delle Carte American Express.',
    summary: 'Tre carte con profili diversi: Blu, Oro e Platino. Emissione, quote e offerte dipendono dalla valutazione e dalle condizioni American Express.',
    sections: [
      { title: 'Scegli il profilo giusto', body: 'Blu American Express offre l’1% di cashback sugli acquisti secondo l’offerta. Oro e Platino includono vantaggi e servizi dedicati secondo il prodotto scelto.' },
      { title: 'Assistenza e sicurezza', body: 'Il Servizio Clienti è disponibile 24 ore su 24 dall’Italia e dall’estero. Le notifiche aiutano a controllare le transazioni e le protezioni antifrode.' },
      { title: 'Offerte dedicate', body: 'Le offerte fino a 129€ o 500€ di sconto sono valide fino al 6 ottobre 2026, secondo il prodotto, i requisiti e il regolamento applicabile.' },
    ],
    links: [{ label: 'Scopri le condizioni American Express', href: 'https://www.americanexpress.com/it/' }],
  },
  {
    slug: 'pagamenti/gift-card', eyebrow: 'Regali', title: 'Dillo con una Gift.',
    intro: 'Celebra ogni ricorrenza, anche a distanza, inviando una Gift Card a chi ami in pochi tap.',
    summary: 'Un regalo digitale da personalizzare e inviare nell’App Tinaba: scegli l’importo, la copertina, il messaggio e la data di apertura.',
    sections: [
      { title: 'Tre passaggi', body: 'Indica l’importo, scegli una copertina e scrivi un messaggio. Puoi anche impostare una data di scadenza per rendere il regalo più personale.' },
      { title: 'Il regalo arriva subito', body: 'Il destinatario riceve immediatamente la Gift Card, ma può aprirla solo nel giorno che hai indicato.' },
      { title: 'Oltre la Gift Card', body: 'Dall’App puoi anche inviare, ricevere e condividere denaro in tempo reale con le persone che contano.' },
    ],
    cta: { label: 'Apri il conto', href: onboarding },
  },
  {
    slug: 'business/e-commerce', eyebrow: 'Tinaba Pay', title: 'Soluzioni per ricevere pagamenti sul tuo e-commerce.',
    intro: 'Ricevi pagamenti digitali con soluzioni progettate per ecommerce, editori e distributori di contenuti.',
    summary: 'Tre soluzioni Tinaba Pay per incassare online, attendere una conferma di magazzino o monetizzare contenuti digitali.',
    sections: [
      { title: 'Tinaba Pay', body: 'Ricevi pagamenti digitali sul tuo e-commerce con una soluzione pensata per ridurre i passaggi tra scelta, autorizzazione e incasso.' },
      { title: 'Tinaba Pay and Check', body: 'Attendi la conferma di disponibilità del prodotto prima di autorizzare il pagamento del cliente.' },
      { title: 'Tinaba Pay for Media', body: 'Ricevi pagamenti anche di piccolo importo per singoli articoli, video o altri contenuti digitali.' },
      { title: 'Per chi vende online', body: 'La soluzione è pensata per e-commerce, editori e distributori di contenuti. Scrivi a Tinaba Business per valutare il percorso di integrazione.' },
    ],
    links: [{ label: 'Contatta Tinaba Business', href: 'mailto:info@tinaba.it' }],
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
    cta: { label: 'Compila il form Ambassador', href: 'https://tinaba.bancaprofilo.it/form-ambassador/' },
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
    intro: 'Tinaba nasce con l’ambizione di integrare tecnologia e prodotti finanziari di Banca Profilo per una gestione semplice, chiara e fully digital.',
    summary: 'Un percorso di evoluzioni di prodotto, partnership e tecnologia al servizio del sistema bancario.',
    sections: [
      { title: 'Una pioniera italiana', body: 'Tinaba nasce con il supporto del fondo Sator e in integrazione con Banca Profilo.' },
      { title: 'Evolvere insieme', body: 'Partnership di rilievo, ampliamento del team e nuovi servizi hanno costruito il percorso della piattaforma.' },
      { title: 'Il prossimo passo', body: 'Costruire il domani del FinTech mantenendo semplice e trasparente la gestione del denaro.' },
    ],
  },
  {
    slug: 'assistenza/sicurezza', eyebrow: 'Sicurezza', title: 'Sicurezza digitale: proteggiti dalle minacce.',
    intro: 'Lavoriamo per prevenire e contrastare i fenomeni fraudolenti. Ecco alcuni consigli per identificare i tentativi di frode e tutelare i tuoi dati.',
    summary: 'La sicurezza dipende dagli strumenti del servizio e dalle scelte quotidiane di chi li utilizza.',
    sections: [
      { title: 'Non cliccare sui link sospetti', body: 'Ignora i link presenti nelle comunicazioni sospette che ti indirizzano verso altri siti.' },
      { title: 'Non fornire informazioni', body: 'Non comunicare codici di sicurezza o dettagli personali a terze persone.' },
      { title: 'Controlla le comunicazioni', body: 'In caso di dubbio, usa esclusivamente i canali ufficiali e contatta l’assistenza.' },
    ],
    links: [{ label: 'Contatta l’assistenza', href: 'tel:800694950' }],
  },
  {
    slug: 'documenti/reclami', eyebrow: 'Documenti', title: 'Reclami e disconoscimenti.',
    intro: 'Puoi presentare un reclamo formale o un disconoscimento di un’operazione di pagamento non autorizzata tramite i canali indicati.',
    summary: 'Banca Profilo mette a disposizione canali dedicati per gestire le richieste formali dei clienti.',
    sections: [
      { title: 'Come presentare un reclamo', body: 'Puoi inviare un reclamo sui prodotti bancari e finanziari offerti da Banca Profilo tramite PEC a canalidigitali_bprofilo@legalmail.it oppure con raccomandata A/R a Via Cerva 28, 20122 Milano.' },
      { title: 'Tempi di risposta', body: 'La conferma arriva entro 60 giorni per i servizi bancari e finanziari e entro 15 giornate operative per i servizi di pagamento. In casi eccezionali la risposta definitiva arriva entro 35 giornate operative.' },
      { title: 'Disconoscimenti', body: 'Compila e firma il modulo per un’operazione non autorizzata e invialo a canalidigitali_disconoscimenti@bancaprofilo.it. Per le carte Nexi o American Express segui il canale indicato nella documentazione specifica.' },
    ],
    links: [
      { label: 'PEC reclami', href: 'mailto:canalidigitali_bprofilo@legalmail.it' },
      { label: 'Email disconoscimenti', href: 'mailto:canalidigitali_disconoscimenti@bancaprofilo.it' },
      { label: 'Scarica il modulo di disconoscimento', href: '/documents/Modulo-disconoscimento-operazioni-non-autorizzate.pdf' },
    ],
  },
  {
    slug: 'pagamenti', eyebrow: 'Smart payment', title: 'Paga ovunque e come vuoi.',
    intro: 'Sblocca lo schermo e avvicina il tuo smartphone al POS contactless. Conferma il pagamento con Touch ID o Face ID.',
    summary: 'Apple Pay, Google Pay, Samsung Pay, Garmin Pay, Fitbit Pay e SwatchPay! per pagare in modo semplice e sicuro.',
    sections: [
      { title: 'Contactless', body: 'Paga nei negozi con POS contactless e online, usando il dispositivo compatibile che preferisci.' },
      { title: 'Più dispositivi', body: 'Collega la carta agli smartwatch e ai servizi di pagamento supportati dal tuo dispositivo.' },
      { title: 'Sicurezza', body: 'Le informazioni di pagamento restano protette e il numero della carta non viene condiviso durante il pagamento.' },
    ],
  },
  {
    slug: 'promozioni', eyebrow: 'Promozioni', title: 'Le opportunità, spiegate bene.',
    intro: 'Iniziative, regolamenti e condizioni in un archivio separato dal racconto principale del prodotto.',
    summary: 'Prima di aderire controlla sempre periodo di validità, requisiti, condizioni e regolamento applicabile.',
    sections: [
      { title: 'Conto Deposito', body: 'Approfondisci la soluzione di Banca Profilo disponibile nell’App Tinaba e consulta sempre la documentazione aggiornata.' },
      { title: 'Scuola e community', body: 'Le iniziative rivolte a studenti, famiglie e community sono soggette a requisiti e periodi specifici.' },
      { title: 'Archivio e aggiornamento', body: 'Le promozioni non confermate o scadute non devono essere presentate come disponibili.' },
    ],
    links: [{ label: 'Documenti legali', href: '/documenti/' }, { label: 'Conto Deposito', href: '/risparmio/conto-deposito/' }],
  },
  {
    slug: 'stampa', eyebrow: 'Area stampa', title: 'Tinaba e Banca Profilo, in breve.',
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
];

export function getEditorialPage(slug: string): EditorialPage | undefined {
  return editorialPages.find((page) => page.slug === slug);
}
