export const productPagePrefixes = [
  'carta',
  'wallet',
  'pagamenti',
  'condivisione',
  'risparmio',
  'investimenti',
  'piani',
  'business',
];
export const productNotices: Record<string, { title: string; body: string }> = {
  carta: {
    title: 'Costi e condizioni della carta',
    body: 'La carta fisica ha un costo di 7,99€; i primi 12 prelievi nell’Unione Europea sono gratuiti. Verifica commissioni, limiti e condizioni aggiornate nei documenti.',
  },
  condivisione: {
    title: 'Denaro condiviso, regole chiare',
    body: 'Gruppi e raccolte seguono modalità e responsabilità diverse. Controlla sempre chi può contribuire, ricevere o modificare una raccolta.',
  },
  'condivisione/gruppi': {
    title: 'Gruppi e spese condivise',
    body: 'Partecipanti, movimenti e richieste dipendono dalle modalità del Gruppo. Verifica sempre importi e destinatari prima di confermare.',
  },
  'condivisione/raccolte': {
    title: 'Raccolte e contributi',
    body: 'Le Raccolte Flash e le Raccolte Fondi hanno scopi e modalità operative diverse. Leggi le condizioni nell’App prima di condividere il link.',
  },
  wallet: {
    title: 'Conto e servizi bancari',
    body: 'IBAN, bonifici, bollettini e servizi collegati dipendono dal piano e dalle condizioni di Banca Profilo. Confronta sempre costi e limiti prima di scegliere.',
  },
  'risparmio/conto-deposito': {
    title: 'Prima di vincolare i risparmi',
    body: 'Tasso, durata, disponibilità delle somme, fiscalità e condizioni sono quelli indicati nel foglio informativo del Conto Deposito aggiornato.',
  },
  risparmio: {
    title: 'Scegli lo strumento adatto',
    body: 'Salvadanaio e Conto Deposito hanno finalità e condizioni diverse. Valuta disponibilità delle somme, durata e documentazione prima di scegliere.',
  },
  'risparmio/salvadanaio': {
    title: 'Obiettivi e accantonamenti',
    body: 'Le modalità di accantonamento dipendono dalle funzioni disponibili in App. Controlla importi, regole e disponibilità prima di impostare un obiettivo.',
  },
  investimenti: {
    title: 'Investire comporta rischi',
    body: 'RoboAdvisor, Conto Titoli e altri strumenti hanno costi e rischi diversi. Leggi la documentazione e valuta il tuo profilo prima di operare.',
  },
  'investimenti/roboadvisor': {
    title: 'Gestione e rischio',
    body: 'I portafogli, le soglie e le modalità del servizio possono cambiare. Nessun rendimento è garantito: consulta sempre costi, rischi e documentazione.',
  },
  'investimenti/conto-titoli': {
    title: 'Scegli con consapevolezza',
    body: 'Gli strumenti finanziari possono perdere valore. Consulta costi, caratteristiche e documenti informativi prima di acquistare.',
  },
  'investimenti/cripto': {
    title: 'Cripto: rischio elevato',
    body: 'Il valore delle criptovalute può variare significativamente e puoi perdere parte o tutto il capitale. Leggi costi, rischi e condizioni prima di operare.',
  },
  piani: {
    title: 'Confronta il piano',
    body: 'Prezzi, cashback, requisiti e limiti dei piani sono quelli indicati nella tabella aggiornata e nella documentazione di Banca Profilo.',
  },
  'piani/premium': {
    title: 'Premium: vantaggi soggetti a condizioni',
    body: 'Costi, cashback, Power e offerte sui brand dipendono dal piano e dai requisiti applicabili. Verifica la documentazione prima di aderire.',
  },
  'piani/start': {
    title: 'Il piano Start',
    body: 'Conto, carta e servizi inclusi sono quelli indicati nella documentazione aggiornata. Verifica costi, limiti e condizioni prima di aderire.',
  },
  'piani/under18': {
    title: 'Per minori e famiglie',
    body: 'L’apertura richiede l’autorizzazione del tutore e il parental control. Età, funzionalità e limiti sono quelli indicati nei documenti aggiornati.',
  },
  business: {
    title: 'Servizi per la tua attività',
    body: 'Incassi, e-commerce e strumenti business dipendono dal profilo dell’attività e dalla soluzione scelta. Scrivi a Tinaba Business per verificare requisiti e attivazione.',
  },
  'pagamenti/american-express': {
    title: 'Offerte American Express',
    body: 'Emissione, quote, cashback e offerte sono soggetti a valutazione, requisiti e regolamenti American Express. Consulta sempre le condizioni del prodotto.',
  },
  pagamenti: {
    title: 'Dispositivi compatibili',
    body: 'Apple Pay, Google Pay e gli altri servizi funzionano secondo compatibilità, disponibilità e condizioni del dispositivo e del circuito.',
  },
  'pagamenti/mondiali': {
    title: 'Pagamenti all’estero',
    body: 'Tassi di cambio, commissioni, limiti e disponibilità dipendono dalla carta e dal paese. Verifica le condizioni prima di partire.',
  },
  'pagamenti/alipay-plus': {
    title: 'Alipay+ in viaggio',
    body: 'Paesi, esercenti aderenti e modalità operative possono cambiare. Consulta la documentazione aggiornata e il dettaglio dei paesi disponibili.',
  },
  'pagamenti/trasferimenti': {
    title: 'Trasferimenti e bonifici',
    body: 'Tempi, limiti e commissioni dipendono dalla modalità scelta e dal piano. Controlla destinatario e riepilogo prima di confermare.',
  },
  'pagamenti/apple-pay': {
    title: 'Apple Pay e compatibilità',
    body: 'La disponibilità dipende da dispositivo, sistema operativo e condizioni Apple Pay. La carta deve essere aggiunta seguendo la procedura ufficiale.',
  },
  'pagamenti/google-pay': {
    title: 'Google Pay e compatibilità',
    body: 'La disponibilità dipende da dispositivo Android, sistema operativo e condizioni Google Pay. Verifica i requisiti prima di aggiungere la carta.',
  },
  'pagamenti/gift-card': {
    title: 'Come funziona la Gift Card',
    body: 'L’importo, la copertina, il messaggio e la data di apertura si impostano nell’App. Disponibilità e caratteristiche sono quelle mostrate nel servizio.',
  },
  'business/e-commerce': {
    title: 'Integrazione business',
    body: 'Le modalità tecniche, i costi e i tempi di attivazione dipendono dalla soluzione e dalla valutazione del progetto. Scrivi a Tinaba Business per un confronto.',
  },
};
