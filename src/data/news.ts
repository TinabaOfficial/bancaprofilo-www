export interface NewsItem {
  date: string;
  category: string;
  title: string;
  summary: string;
  href?: string;
  image?: { src: string; alt: string };
  archived?: boolean;
}

// Archivio ricavato dalla sezione "Non perderti le ultime novità!" del mirror locale.
// Le date seguono il mese della risorsa pubblicata nel mirror; non sono date di
// decorrenza delle singole promozioni.
export const newsItems: NewsItem[] = [
  { date: 'Settembre 2026', category: 'Investire', title: 'Tecnologia AI per i tuoi investimenti', summary: 'Abbiamo integrato Sphere, la piattaforma di Investment Management di MDOTM, nel processo di gestione degli investimenti.', href: '/investimenti/', image: { src: '/assets/editorial/news-robo-ai.png', alt: 'Tecnologia AI per gli investimenti Tinaba' } },
  { date: 'Settembre 2026', category: 'Promozioni', title: '30€ + 5% di Cashback per te!', summary: 'Aderisci all’iniziativa e paga la retta o la mensa scolastica con l’App Tinaba. Verifica sempre periodo, requisiti e regolamento.', href: 'https://promo.bancaprofilo.it/tinabascuola', image: { src: '/assets/editorial/news-scuola-original.png', alt: 'Illustrazione della promozione scuola Tinaba' } },
  { date: 'Settembre 2026', category: 'Risparmiare', title: 'Fino al 3,20% con il Conto Deposito', summary: 'Il Conto Deposito di Banca Profilo è disponibile nell’App Tinaba. Consulta la documentazione aggiornata prima di aderire.', href: '/risparmio/conto-deposito/', image: { src: '/assets/editorial/news-conto-deposito-original.png', alt: 'Conto Deposito di Banca Profilo nell’App Tinaba' } },
  { date: 'Luglio 2026', category: 'Promozioni', title: 'Invita un amico e ricevi fino a 60€ di Bonus', summary: 'Condividi il tuo codice invito. Requisiti, importi e scadenze sono descritti nel regolamento dell’iniziativa.', href: '/promozioni/', image: { src: '/assets/editorial/news-invita-amico.png', alt: 'Promozione Invita un amico Tinaba' } },
  { date: 'Gennaio 2026', category: 'Viaggiare', title: 'La Cina continentale a portata di App', summary: 'Paga con Alipay+ dalla tua App Tinaba tramite QR code, secondo le modalità disponibili del servizio.', href: '/pagamenti/alipay-plus/', image: { src: '/assets/editorial/news-cina.png', alt: 'Pagamenti Alipay+ in Cina dall’App Tinaba' } },
  { date: 'Dicembre 2025', category: 'Viaggiare', title: 'Argentina, Colombia, Messico e Perù', summary: 'Nuovi Paesi si aggiungono alla lista di quelli in cui è possibile pagare direttamente con Alipay+ da App Tinaba.', href: '/pagamenti/alipay-plus/', image: { src: '/assets/editorial/news-alipay-paesi.png', alt: 'Paesi in cui pagare con Alipay+ dall’App Tinaba' } },
  { date: 'Novembre 2025', category: 'Community', title: 'Regala un sorriso con WISHOPe', summary: 'Un e-shop per fare un regalo direttamente a chi ne ha bisogno. Iniziativa conclusa il 7 gennaio 2026.', href: '/community/wishope/', archived: true },
  { date: 'Settembre 2025', category: 'In evidenza', title: 'Grandi novità in arrivo', summary: 'Pagamenti in Cina in euro e real time, Voyager per organizzare i viaggi e AI per aiutare a gestire le finanze.', archived: true },
  { date: 'Luglio 2025', category: 'Viaggiare', title: 'Cashback in valigia!', summary: 'Una promozione Alipay+ per pagare dall’App Tinaba in Italia e all’estero. Promo conclusa il 31 ottobre 2025.', href: '/pagamenti/alipay-plus/', archived: true },
  { date: 'Giugno 2025', category: 'Investire', title: 'Dichiarazione senza stress!', summary: 'Il Report Fiscale Cripto Evoluto 2025 guidava passo passo nella dichiarazione delle criptovalute.', archived: true },
  { date: 'Maggio 2025', category: 'Promozioni', title: 'Fino a 60€ con un invito!', summary: 'Invita i tuoi amici in App Tinaba con il tuo codice. Promo conclusa il 6 giugno 2025.', href: '/promozioni/', archived: true },
  { date: 'Marzo 2025', category: 'Promozioni', title: 'Fino a 60€ con un invito!', summary: 'Un’iniziativa dedicata agli inviti in Tinaba, con bonus per chi invita e per chi si registra. Promo conclusa.', href: '/promozioni/', archived: true },
  { date: 'Febbraio 2025', category: 'Investire', title: 'Promo Conto Titoli: limiti minimi azzerati!', summary: 'Promozione sul Conto Titoli valida dal 25 febbraio al 18 marzo 2025. Iniziativa conclusa.', href: '/investimenti/conto-titoli/', archived: true },
  { date: 'Gennaio 2025', category: 'Investire', title: 'Investi con il Conto Titoli', summary: 'Una selezione di strumenti finanziari da gestire direttamente dalla tua App.', href: '/investimenti/conto-titoli/', archived: true },
  { date: 'Gennaio 2025', category: 'Promozioni', title: 'Fino a 60€ di Bonus', summary: 'Un’iniziativa di invito in Tinaba con bonus per chi invita e per chi si registra. Promo conclusa.', href: '/promozioni/', archived: true },
  { date: 'Dicembre 2024', category: 'Community', title: 'Nuovo corso online!', summary: 'Finanza Digitale: Neobank e Tecnologie FinTech, il corso di ICE SDA Bocconi in collaborazione con Tinaba.', href: 'https://corsoicesdabocconi.tinaba.it/', archived: true },
  { date: 'Dicembre 2024', category: 'Condividere', title: 'I Gruppi Tinaba si evolvono', summary: 'Statistiche dettagliate sulle spese e tag sulle transazioni dei Gruppi Tinaba.', href: '/condivisione/gruppi/', archived: true },
  { date: 'Novembre 2024', category: 'Promozioni', title: 'Super Bonus in un TAP!', summary: 'Un’iniziativa di invito con bonus per chi invita e per chi si registra. Promo conclusa il 2 dicembre 2024.', href: '/promozioni/', archived: true },
  { date: 'Novembre 2024', category: 'Community', title: 'Regala un sorriso con WISHOPe', summary: 'Un’iniziativa natalizia per fare un regalo a una persona bisognosa.', href: '/community/wishope/', archived: true },
  { date: 'Ottobre 2024', category: 'Promozioni', title: 'Dolcetto o… Bonus?', summary: 'Un’iniziativa di invito in occasione di Halloween. Promo conclusa.', href: '/promozioni/', archived: true },
  { date: 'Ottobre 2024', category: 'Viaggiare', title: 'Tinaba e Alipay+: un nuovo universo di servizi', summary: 'I Mini Program Alipay+ ampliano i servizi disponibili in un’unica esperienza digitale.', href: '/pagamenti/alipay-plus/', archived: true },
  { date: 'Luglio 2024', category: 'Vantaggi', title: 'Shopping a 5 stelle!', summary: 'Un’offerta riservata ai clienti Tinaba a Fidenza Village. Iniziativa conclusa.', archived: true },
  { date: 'Agosto 2024', category: 'Promozioni', title: 'Estate = Super Bonus!', summary: 'Un’iniziativa di invito con bonus per chi invita e per chi si registra. Promo conclusa.', href: '/promozioni/', archived: true },
  { date: 'Luglio 2024', category: 'Viaggiare', title: 'Ottieni i gadget degli europei!', summary: 'Un’iniziativa Alipay+ legata a UEFA EURO 2024. Iniziativa conclusa.', archived: true },
  { date: 'Luglio 2024', category: 'Promozioni', title: 'Super invita un amico!', summary: 'Un’iniziativa di invito con bonus per chi invita e per chi si registra. Promo conclusa.', href: '/promozioni/', archived: true },
  { date: 'Giugno 2024', category: 'Investire', title: 'Scopri il nuovo Report Fiscale Crypto', summary: 'Un report per orientarsi nella dichiarazione fiscale delle criptovalute. Servizio e condizioni da verificare in App.', archived: true },
  { date: 'Giugno 2024', category: 'Eventi', title: 'Tinaba al Money20/20', summary: 'Tinaba al principale evento internazionale dedicato a pagamenti, fintech e servizi finanziari.', href: '/news/', archived: true },
  { date: 'Maggio 2024', category: 'Pagare', title: 'Benvenuta American Express!', summary: 'Una Carta American Express richiedibile tramite l’App Tinaba, secondo l’offerta disponibile.', href: '/pagamenti/american-express/', archived: true },
  { date: 'Dicembre 2023', category: 'Viaggiare', title: 'Ottieni una Gift Card SiVola', summary: 'Un’iniziativa dedicata ai viaggi con codice promozionale. Promo conclusa.', archived: true },
  { date: 'Novembre 2023', category: 'Investire', title: 'Scopri la promozione sul Roboadvisor', summary: 'Una promozione legata all’attivazione di un PAC. Iniziativa conclusa.', href: '/investimenti/roboadvisor/', archived: true },
  { date: 'Novembre 2023', category: 'Community', title: 'Scopri WISHOPe', summary: 'L’e-shop per fare un vero regalo di Natale a chi ne ha bisogno.', href: '/community/wishope/', archived: true },
  { date: 'Novembre 2023', category: 'Promozioni', title: 'Invita due o più amici', summary: 'Un’iniziativa per ottenere più bonus invitando amici in Tinaba. Promo conclusa.', href: '/promozioni/', archived: true },
  { date: 'Ottobre 2023', category: 'Community', title: 'Ambassador Program', summary: 'Il programma di Ambassador Tinaba. Adesioni e condizioni da verificare.', href: '/community/ambassador/', archived: true },
  { date: 'Ottobre 2023', category: 'Promozioni', title: 'Fino a 100€ di bonus', summary: 'Un’iniziativa collegata all’accredito dello stipendio. Promo conclusa.', href: '/promozioni/', archived: true },
  { date: 'Settembre 2023', category: 'Piani', title: 'Tinaba Premium in regalo!', summary: 'Un’iniziativa dedicata alla membership Premium. Promo conclusa.', href: '/piani/premium/', archived: true },
  { date: 'Settembre 2023', category: 'Viaggiare', title: 'Nuovi Paesi nel circuito Alipay+', summary: 'Stati Uniti, Emirati Arabi e San Marino si aggiungono ai Paesi disponibili. Informazione storica.', href: '/pagamenti/alipay-plus/', archived: true },
  { date: 'Settembre 2023', category: 'Promozioni', title: 'Estate senza sòle', summary: 'Bonus, cashback e sconti in un’iniziativa estiva conclusa il 4 settembre 2023.', href: '/promozioni/', archived: true },
  { date: 'Luglio 2023', category: 'App', title: 'Tinaba in Pillole', summary: 'Curiosità e consigli sulle funzionalità dell’App Tinaba.', archived: true },
  { date: 'Luglio 2023', category: 'Viaggiare', title: 'Tinaba e Alipay+: partnership rinnovata', summary: 'Pagamenti direttamente dall’App Tinaba in euro e in italiano nella rete di esercenti Alipay+.', href: '/pagamenti/alipay-plus/', archived: true },
  { date: 'Giugno 2023', category: 'Vantaggi', title: 'Tinaba insieme a SiVola', summary: 'Partnership con il tour operator SiVola e vantaggi dedicati ai clienti Tinaba.', archived: true },
];
