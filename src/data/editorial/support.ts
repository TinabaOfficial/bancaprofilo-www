import { defineEditorialPages } from './types';

export const supportPages = defineEditorialPages('support', [
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
    intro: 'Nessun cookie non necessario viene attivato senza il tuo consenso. Sul dominio di produzione Cookiebot raccoglie e documenta le preferenze; Google Tag Manager gestisce solo i tag autorizzati.',
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
    intro: 'Nessun cookie non necessario viene attivato senza il tuo consenso.',
    summary: 'Sul dominio di produzione Cookiebot raccoglie le tue preferenze; Google Tag Manager carica solo i tag consentiti dalla configurazione pubblicata.',
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
]);
