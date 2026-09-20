import { defineEditorialPages } from './types';
import { onboarding } from './config';
import { siteConfig } from '../../config/site';

export const productsPages = defineEditorialPages('product', [
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
    summary: 'Dalle spese di casa a un viaggio: una vista comune aiuta a capire chi ha pagato e cosa resta da fare, mantenendo separati i conti personali.',
    sections: [
      {
        title: 'Gruppi per le spese di tutti i giorni',
        body: 'Crea un Gruppo, invita le persone e condividi le spese in modo trasparente: dalla bolletta del Wi-Fi all’abbonamento a Netflix, senza confondere il budget comune con quello personale.',
      },
      {
        title: 'Per casa, viaggi e regali',
        body: 'Un Gruppo può aiutare coinquilini, amici e colleghi a organizzare le spese della casa, di un viaggio o di un regalo, con una vista comune su ciò che è già stato pagato e ciò che resta da fare.',
      },
      {
        title: 'Più chiarezza per tutti',
        body: 'Le transazioni del Gruppo restano leggibili per i partecipanti. Nell’App puoi consultare i movimenti e, quando disponibili, statistiche e tag per capire meglio come vengono distribuite le spese.',
      },
      {
        title: 'Raccolte Flash',
        body: 'Dividi una spesa comune e raccogli i contributi delle persone coinvolte in modo ordinato, seguendo le modalità operative disponibili nell’App.',
      },
      {
        title: 'Raccolte Fondi',
        body: 'Invita le persone che conosci a contribuire a una spesa tramite App o carta. Prima di condividere un link, verifica sempre destinatari, modalità e condizioni della raccolta.',
      },
      {
        title: 'Invia o richiedi denaro',
        body: 'Quando qualcuno deve restituirti una quota o vuoi saldare una spesa, puoi inviare o richiedere denaro ai tuoi contatti secondo le funzioni disponibili nell’App.',
      },
    ],
  },
  {
    slug: 'risparmio', eyebrow: 'Risparmiare', title: 'Dai una direzione ai tuoi soldi.',
    intro: 'Obiettivi e strumenti per costruire il tuo modo di risparmiare con più consapevolezza.',
    summary: 'Un percorso che collega Salvadanaio, risparmio e Conto Deposito.',
    sections: [
      { title: 'Salvadanai', body: 'Crea obiettivi separati e metti da parte le somme con regole di accantonamento definite da te. È un modo semplice per rendere visibile il percorso verso ciò che vuoi realizzare.' },
      { title: 'Conto Deposito', body: 'Una soluzione di Banca Profilo per organizzare i risparmi secondo durata, disponibilità delle somme e condizioni indicate nella documentazione aggiornata.' },
    ],
    links: [
      { label: 'Scopri i Salvadanai', href: '/risparmio/salvadanaio/' },
      { label: 'Scopri il Conto Deposito', href: '/risparmio/conto-deposito/' },
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
    slug: 'investimenti', eyebrow: 'Investire', title: 'Scegli come far crescere le tue idee.',
    intro: 'Dal RoboAdvisor al Conto Titoli, fino alle cripto: strumenti diversi per obiettivi, profili e livelli di autonomia diversi.',
    summary: 'I servizi di investimento di Banca Profilo sono disponibili attraverso l’esperienza digitale Tinaba. Confronta le possibilità e consulta sempre costi, rischi e documentazione prima di scegliere.',
    sections: [
      { title: 'RoboAdvisor', body: 'Un percorso digitale di Banca Profilo con portafogli in ETF, profili diversi, PAC e la tecnologia AI di Sphere a supporto del processo di gestione.' },
      { title: 'Conto Titoli', body: 'Scegli e gestisci strumenti finanziari direttamente dall’App, con una selezione di ISIN e informazioni utili per operare in autonomia.' },
      { title: 'Cripto', body: 'Acquista, vendi e custodisci le criptovalute disponibili in App, conoscendo prima costi, condizioni e rischi.' },
    ],
    links: [
      { label: 'Scopri il RoboAdvisor', href: '/investimenti/roboadvisor/' },
      { label: 'Scopri il Conto Titoli', href: '/investimenti/conto-titoli/' },
      { label: 'Scopri le cripto', href: '/investimenti/cripto/' },
    ],
  },
  {
    slug: 'investimenti/cripto', eyebrow: 'Investire', title: 'Acquista, vendi e custodisci cripto.',
    intro: 'Scegli le tue criptovalute dall’App Tinaba e acquistale a partire da 25€.',
    summary: 'Il servizio è erogato da CheckSig, primo CASP italiano. In App sono disponibili nove criptovalute: Bitcoin, Bitcoin Cash, Ethereum, Litecoin, Polygon (MATIC), Ripple, Zcash, Solana e Cardano.',
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
      { title: 'Tinaba di Banca Profilo', body: 'Tinaba abilita l’esperienza digitale; Banca Profilo è il soggetto bancario di riferimento. Disponibilità, condizioni e modalità operative sono quelle comunicate nei documenti e nell’App.' },
    ],
    cta: { label: 'Apri il conto', href: onboarding },
    links: [{ label: 'Scopri Alipay+', href: siteConfig.destinations.alipayPlusCountries }],
  },
  {
    slug: 'piani', eyebrow: 'Scegli il tuo ritmo', title: 'Il piano giusto per il tuo modo di vivere il denaro.',
    intro: 'Tre modi diversi di vivere il tuo conto: confronta servizi, costi e condizioni prima di scegliere.',
    summary: 'Start, Premium e Under 18: tre piani per partire da ciò che ti serve oggi.',
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
    slug: 'business', eyebrow: 'Business', title: 'Il conto per attività e aziende.',
    intro: 'Con il conto business di Banca Profilo puoi accettare pagamenti online, a distanza e senza POS, con il supporto della piattaforma Tinaba.',
    summary: 'Strumenti digitali per incassare e gestire i pagamenti della tua attività.',
    sections: [
      { title: 'Incassa senza POS', body: 'Accetta pagamenti anche senza un terminale fisico, usando gli strumenti disponibili nell’ecosistema Tinaba.' },
      { title: 'Incassa online', body: 'Aggiungi l’App Tinaba alle opzioni di pagamento del tuo e-commerce con un’integrazione supportata dal team.' },
      { title: 'Incassa a distanza', body: 'Gestisci richieste di pagamento e relazioni con i tuoi clienti attraverso canali digitali.' },
    ],
    cta: { label: 'Apri il conto Business', href: siteConfig.destinations.business },
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
    slug: 'investimenti/roboadvisor', eyebrow: 'RoboAdvisor', title: 'Tecnologia e competenza, insieme.',
    intro: 'Il RoboAdvisor di Banca Profilo porta nell’App Tinaba portafogli dinamici, gestione digitale e un percorso graduale per investire.',
    summary: 'L’AI di Sphere supporta l’analisi dei mercati, l’ottimizzazione e il ribilanciamento. Le proposte elaborate vengono valutate e validate dal team investimenti di Banca Profilo.',
    sections: [
      { title: 'Portafogli dinamici', body: 'Sphere supporta l’analisi dei mercati, l’ottimizzazione e il ribilanciamento dei portafogli. La tecnologia lavora insieme al team investimenti di Banca Profilo.' },
      { title: 'Gestisci in libertà', body: 'Parti da un investimento di 2.000€, modifica l’importo quando vuoi e usa la modalità Parking per mettere in pausa il portafoglio secondo le condizioni del servizio.' },
      { title: 'Investi gradualmente', body: 'Attiva un PAC con versamenti mensili a partire da 50€. Puoi modificare l’importo e ricevere una notifica a ogni versamento.' },
      { title: 'Scegli il tuo profilo', body: 'Scegli tra 8 portafogli in ETF, diversificati per livello di rischio e creati dal team di professionisti di Banca Profilo. Puoi cambiare profilo secondo le modalità previste.' },
    ],
    links: [{ label: 'Vai alla guida sui portafogli', href: siteConfig.destinations.investmentsGuide }],
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
    slug: 'pagamenti/apple-pay', eyebrow: 'Pagamenti digitali', title: 'Pagare con Apple Pay è più facile.',
    intro: 'Aggiungi la tua carta Tinaba ad Apple Pay e paga in modo semplice e sicuro con i dispositivi compatibili.',
    summary: 'Pagamenti contactless con iPhone e Apple Watch nei negozi, nelle app e online.',
    sections: [
      { title: 'Paga in un istante', body: 'Avvicina il dispositivo al POS contactless e conferma con Touch ID o Face ID.' },
      { title: 'I tuoi dati al sicuro', body: 'Il numero della carta non viene condiviso con il negozio durante il pagamento.' },
    ],
  },
  {
    slug: 'pagamenti/google-pay', eyebrow: 'Pagamenti digitali', title: 'Fai acquisti in tutto il mondo con il tuo smartphone.',
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
    links: [{ label: 'Scopri le condizioni American Express', href: siteConfig.destinations.americanExpress }],
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
    slug: 'pagamenti', eyebrow: 'Pagamenti digitali', title: 'Paga ovunque e come vuoi.',
    intro: 'Sblocca lo schermo e avvicina il tuo smartphone al POS contactless. Conferma il pagamento con Touch ID o Face ID.',
    summary: 'Apple Pay, Google Pay, Samsung Pay, Garmin Pay, Fitbit Pay e SwatchPay! per pagare in modo semplice e sicuro.',
    links: [
      { label: 'Approfondisci Apple Pay', href: '/pagamenti/apple-pay/' },
      { label: 'Approfondisci Google Pay', href: '/pagamenti/google-pay/' },
      { label: 'Scopri Alipay+ in viaggio', href: '/pagamenti/alipay-plus/' },
    ],
    sections: [
      { title: 'Contactless', body: 'Paga nei negozi con POS contactless e online, usando il dispositivo compatibile che preferisci.' },
      { title: 'Più dispositivi', body: 'Collega la carta agli smartwatch e ai servizi di pagamento supportati dal tuo dispositivo.' },
      { title: 'Sicurezza', body: 'Le informazioni di pagamento restano protette e il numero della carta non viene condiviso durante il pagamento.' },
    ],
  },
]);
