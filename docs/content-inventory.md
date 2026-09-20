# Inventario contenuti — baseline mirror

Approvazione contenuti: è stato autorizzato l’uso nel nuovo sito dei contenuti legali,
delle condizioni economiche, dei recapiti e degli asset con diritti verificati presenti
nel mirror. Il porting Astro resta comunque selettivo: non importa tracking, script,
template WordPress o risorse tecniche.

## Perimetro verificato

- Fonte homepage: `httrack/bancaprofilo-www/tinaba.bancaprofilo.it/index.html`.
- File nel mirror del sito: 3.515.
- HTML complessivi: 1.145.
- Asset sotto `wp-content/`: 772, di cui 512 PNG, 101 PDF, 91 SVG, 11 JPG.
- Font locali presenti nel mirror: Objectiv e Font Awesome, in più formati.
- I file `index` con suffisso esadecimale e titolo `Page has moved` sono copie tecniche
  HTTrack e non route editoriali.
- `com.html`, `net.html`, `optusnet.com.html` e `popper.html` sono pagine di
  errore/cattura e non entrano nella nuova architettura.

## Homepage osservata

La fonte contiene queste aree editoriali principali:

- hero/promozioni e registrazione per privati o business;
- “Cosa ti serve?”: banking, sharing, finance e rewarding;
- “Con chi puoi usarla”: carta/app e pagamenti;
- piani Start, Premium e Under18, con confronto;
- “Oltre il prodotto”: missione, educazione finanziaria e community;
- news e promozioni;
- footer con assistenza, società, documenti e link istituzionali.

La promessa di progetto resta `I soldi, come devono funzionare.`; il titolo oggi
presente nel mirror è invece `Paga, Gestisci e Condividi Denaro Senza Vincoli` e va
trattato come contenuto legacy da riscrivere/approvare.

## Matrice route/contenuto

Stato `da verificare` significa che il mirror è una fonte editoriale, ma non è
sufficiente per approvare condizioni economiche, claim finanziari, dati regolamentari o
testi legali.

## Matrice route/contenuto

Ogni voce conserva fonte, destinazione, scopo, CTA, claim sensibili e stato.

- `/index.html` -> `/`
  - Ambito: Homepage; Orientamento per privati e business
  - CTA/asset: Apri il conto; hero, carta/app, news
  - Claim sensibili: bonus, tassi, partnership
  - Stato: da verificare

- `/carta.html` -> `/carta/`
  - Ambito: Carta Mastercard; Presentare carta e uso quotidiano
  - CTA/asset: Richiesta/registrazione; immagini carta
  - Claim sensibili: costi, circuito, condizioni
  - Stato: da verificare

- `/start.html` -> `/piani/start/`
  - Ambito: Piano Start; Conto e carta base
  - CTA/asset: Scopri Start
  - Claim sensibili: prezzi e servizi inclusi
  - Stato: da verificare

- `/premium.html` -> `/piani/premium/`
  - Ambito: Piano Premium; Membership e vantaggi
  - CTA/asset: Scopri Premium
  - Claim sensibili: prezzo, sconti, vantaggi
  - Stato: da verificare

- `/minorenni.html` -> `/piani/under18/`
  - Ambito: Under18; Prodotto per minori e famiglie
  - CTA/asset: Scopri Under18
  - Claim sensibili: titolarità, limiti, consenso
  - Stato: da verificare

- `/confronta-i-piani.html` -> `/piani/`
  - Ambito: Confronto piani; Aiutare la scelta
  - CTA/asset: Confronta
  - Claim sensibili: prezzi e condizioni
  - Stato: da verificare

- `/wallet.html` -> `/wallet/`
  - Ambito: Wallet; Presentare gestione denaro
  - CTA/asset: Registrati
  - Claim sensibili: funzioni e disponibilità
  - Stato: da verificare

- `/trasferimenti.html` -> `/pagamenti/trasferimenti/`
  - Ambito: Trasferimenti; Pagamenti e trasferimenti
  - CTA/asset: Approfondisci
  - Claim sensibili: limiti, tempi, costi
  - Stato: da verificare

- `/gruppi.html` -> `/condivisione/gruppi/`
  - Ambito: Gruppi; Spese condivise
  - CTA/asset: Crea un gruppo
  - Claim sensibili: funzionamento e limiti
  - Stato: da verificare

- `/denaro-collaborativo.html` -> `/condivisione/`
  - Ambito: Denaro collaborativo; Raccolte e spese condivise
  - CTA/asset: Scopri di più
  - Claim sensibili: responsabilità e uso
  - Stato: da verificare

- `/raccogli-soldi.html` -> `/condivisione/raccolte/`
  - Ambito: Raccogli soldi; Raccolte per privati/progetti
  - CTA/asset: Raccogli soldi
  - Claim sensibili: flussi e commissioni
  - Stato: da verificare

- `/risparmi.html` -> `/risparmio/`
  - Ambito: Risparmi; Orientamento al risparmio
  - CTA/asset: Scopri di più
  - Claim sensibili: rendimento/garanzie
  - Stato: da verificare

- `/salvadanaio.html` -> `/risparmio/salvadanaio/`
  - Ambito: Salvadanaio; Obiettivi di risparmio
  - CTA/asset: Scopri di più
  - Claim sensibili: condizioni e disponibilità
  - Stato: da verificare

- `/conto-deposito.html` -> `/risparmio/conto-deposito/`
  - Ambito: Conto Deposito; Prodotto di deposito
  - CTA/asset: Scopri il conto
  - Claim sensibili: tasso fino al 3,20%, condizioni
  - Stato: da verificare

- `/investimenti.html` -> `/investimenti/roboadvisor/`
  - Ambito: Roboadvisor; Investimenti per privati
  - CTA/asset: Investi
  - Claim sensibili: rischio, rendimento, profilazione
  - Stato: da verificare

- `/conto-titoli.html` -> `/investimenti/conto-titoli/`
  - Ambito: Conto Titoli; Investimenti autonomi
  - CTA/asset: Apri/approfondisci
  - Claim sensibili: costi, rischi, soglie
  - Stato: da verificare

- `/cripto.html` -> `/investimenti/cripto/`
  - Ambito: Cripto; Acquisto e vendita cripto
  - CTA/asset: Approfondisci
  - Claim sensibili: rischi e costi
  - Stato: da verificare

- `/pagamenti-mondiali.html` -> `/pagamenti/mondiali/`
  - Ambito: Pagamenti mondiali; Uso internazionale
  - CTA/asset: Scopri di più
  - Claim sensibili: paesi, cambio, costi
  - Stato: da verificare

- `/apple-pay.html` -> `/pagamenti/apple-pay/`
  - Ambito: Apple Pay; Pagamenti smart
  - CTA/asset: Attiva/approfondisci
  - Claim sensibili: compatibilità
  - Stato: da verificare

- `/google-pay.html` -> `/pagamenti/google-pay/`
  - Ambito: Google Pay; Pagamenti smart
  - CTA/asset: Attiva/approfondisci
  - Claim sensibili: compatibilità
  - Stato: da verificare

- `/american-express.html` -> `/pagamenti/american-express/`
  - Ambito: American Express; Integrazione carta
  - CTA/asset: Scopri di più
  - Claim sensibili: partnership e disponibilità
  - Stato: da verificare

- `/gift-card.html` -> `/pagamenti/gift-card/`
  - Ambito: Gift Card; Regali e pagamenti
  - CTA/asset: Scopri le gift card
  - Claim sensibili: partner e condizioni
  - Stato: da verificare

- `/e-commerce.html` -> `/business/e-commerce/`
  - Ambito: Tinaba Pay; Merchant e organizzazioni
  - CTA/asset: Contatti/approfondisci
  - Claim sensibili: disponibilità del servizio
  - Stato: da verificare

- `/business.html` -> `/business/`
  - Ambito: Tinaba Business; Attività e aziende
  - CTA/asset: Dashboard/contatti
  - Claim sensibili: offerta e onboarding
  - Stato: da verificare

- `/charity.html` -> `/community/charity/`
  - Ambito: Charity; Raccolta contributi
  - CTA/asset: Scopri di più
  - Claim sensibili: beneficiari e flussi
  - Stato: da verificare

- `/wishope.html` -> `/community/wishope/`
  - Ambito: WISHOPe; Merchant/community
  - CTA/asset: Visita WISHOPe
  - Claim sensibili: partner e offerte
  - Stato: da verificare

- `/community.html` -> `/community/`
  - Ambito: Community; Vantaggi e iniziative
  - CTA/asset: Scopri la community
  - Claim sensibili: promozioni
  - Stato: da verificare

- `/ambassador.html` -> `/community/ambassador/`
  - Ambito: Ambassador; Programma ambassador
  - CTA/asset: Candidati
  - Claim sensibili: compensi/criteri
  - Stato: da verificare

- `/form-ambassador.html` -> da decidere
  - Ambito: Form ambassador; Candidatura
  - CTA/asset: Invio form
  - Claim sensibili: privacy e trattamento dati
  - Stato: non portare senza backend

- `/i-nostri-valori.html` -> `/chi-siamo/valori/`
  - Ambito: Valori; Identità e cultura
  - CTA/asset: Approfondisci
  - Claim sensibili: claim istituzionali
  - Stato: editoriale

- `/chi-siamo.html` -> `/chi-siamo/`
  - Ambito: Chi siamo; Presentazione Tinaba
  - CTA/asset: Scopri di più
  - Claim sensibili: dati societari
  - Stato: da verificare

- `/la-storia.html` -> `/chi-siamo/storia/`
  - Ambito: Storia; Cronologia aziendale
  - CTA/asset: Approfondisci
  - Claim sensibili: date e fatti
  - Stato: editoriale

- `/banca-profilo.html` -> `/banca-profilo/`
  - Ambito: Banca Profilo; Fiducia e contesto bancario
  - CTA/asset: Link istituzionale
  - Claim sensibili: dati regolamentari
  - Stato: approvazione istituzionale

- `/area-stampa.html` -> `/stampa/`
  - Ambito: Area stampa; Giornalisti e news
  - CTA/asset: Download/contatti
  - Claim sensibili: comunicati e dati
  - Stato: da verificare

- `/money-20-20.html` -> `/news/`
  - Ambito: Money20/20; News/evento
  - CTA/asset: Archivio
  - Claim sensibili: contenuto temporale
  - Stato: archivio

- `/aiuto.html` -> `/assistenza/`
  - Ambito: Assistenza; Supporto utenti
  - CTA/asset: Supporto esterno
  - Claim sensibili: contatti e SLA
  - Stato: da verificare

- `/manuale-d-uso.html` -> `/assistenza/manuale/`
  - Ambito: Manuale d’uso; Guida prodotto
  - CTA/asset: Download
  - Claim sensibili: versioni e validità
  - Stato: da verificare

- `/sicurezza.html` -> `/assistenza/sicurezza/`
  - Ambito: Sicurezza; Educazione e protezione
  - CTA/asset: Approfondisci
  - Claim sensibili: responsabilità e sicurezza
  - Stato: editoriale

- `/accessibilita.html` -> `/accessibilita/`
  - Ambito: Trasparenza/accessibilità; Accessibilità e trasparenza
  - CTA/asset: Documenti
  - Claim sensibili: conformità e contatti
  - Stato: legale da verificare

- `/documenti-legali.html` -> `/documenti/`
  - Ambito: Documenti legali; Raccolta documenti
  - CTA/asset: Download
  - Claim sensibili: validità documenti
  - Stato: legale da verificare

- `/trasparenza-bancaria-tinaba.html` -> `/documenti/trasparenza/`
  - Ambito: Trasparenza bancaria; Informativa regolamentare
  - CTA/asset: Download
  - Claim sensibili: dati bancari
  - Stato: legale da verificare

- `/reclami-e-disconoscimenti.html` -> `/documenti/reclami/`
  - Ambito: Reclami e disconoscimenti; Canali formali
  - CTA/asset: Contatti/documenti
  - Claim sensibili: termini e recapiti
  - Stato: legale da verificare

- `/informativa-privacy-sito.html` -> `/privacy/`
  - Ambito: Privacy sito; Informativa runtime
  - CTA/asset: Link documento
  - Claim sensibili: titolare, basi, retention
  - Stato: blocco approvazione

- `/informativa-sulla-privacy.html` -> da decidere
  - Ambito: Privacy generale; Informativa legacy
  - CTA/asset: Link documento
  - Claim sensibili: titolare, basi, retention
  - Stato: possibile duplicato

- `/impostazioni-cookie.html` -> `/cookie/`
  - Ambito: Cookie; Preferenze cookie
  - CTA/asset: Gestione preferenze
  - Claim sensibili: cookie effettivi
  - Stato: da verificare, no cookie default

- `/promozioni-e-regolamenti*.html` -> `/promozioni/`
  - Ambito: Promozioni e regolamenti; Archivio promo
  - CTA/asset: Regolamenti
  - Claim sensibili: bonus, date, scadenze
  - Stato: separare attive/scadute

- `/promo-scuola.html` -> `/promozioni/scuola/`
  - Ambito: Promo scuola; Iniziativa temporanea
  - CTA/asset: Aderisci ora
  - Claim sensibili: requisiti e validità
  - Stato: implementata nella route Astro dedicata; validità e regolamento restano subordinati alla fonte ufficiale

- `/power.html` -> da decidere
  - Ambito: Power; Piano/promozione legacy
  - CTA/asset: Approfondisci
  - Claim sensibili: prezzi e condizioni
  - Stato: possibile obsolescenza

- `/un-mondo-di-pay.html` -> `/pagamenti/`
  - Ambito: Smart payment; Hub pagamenti
  - CTA/asset: Approfondisci
  - Claim sensibili: partner e disponibilità
  - Stato: da verificare

## Porting implementato

Sono stati portati in `src/data/pages.ts` 44 contenuti editoriali per carta, wallet,
trasferimenti, gruppi, raccolte, risparmio, Salvadanaio, Conto Deposito, Roboadvisor,
Conto Titoli, cripto, pagamenti mondiali, Alipay+, smart payment, piani, chi siamo,
Banca Profilo, business, e-commerce, community, charity, WISHOPe, ambassador,
assistenza, sicurezza, documenti, reclami, accessibilità, privacy, cookie, news,
promozioni e stampa. Insieme alla homepage e alle panoramiche `/soluzioni/` e
`/brand-guidelines/` e `/promozioni/scuola/`, il build statico produce 48 pagine HTML. In `public/` sono
presenti asset visuali locali selezionati, la favicon Tinaba e quattro PDF selezionati
dal mirror.

## Confini del porting attuale

- Il sorgente Astro è in `src/`; gli asset pubblici e i PDF sono in `public/`; l’output
  statico è `dist/`.
- Il progetto usa Astro 5, TypeScript e npm. Non esiste un backend, un account, un
  checkout o un onboarding simulato nel repository.
- I link operativi usano destinazioni esterne già presenti e selezionate, in particolare
  `onboarding.bancaprofilo.it`; la destinazione definitiva resta una decisione
  editoriale/operativa aperta.
- Il porting non comprende compatibilità automatica con gli URL legacy, promozioni
  separate, area stampa completa o il form ambassador senza endpoint approvato.
- Il progetto non introduce analytics, pixel, advertising, profiling, Cookiebot, Google
  Tag Manager, chat, embed o font remoti.

## Verifiche automatiche

- `npm run check`: passato, 0 errori, 0 warning e 0 hint.
- `npm run build`: passato, 48 pagine statiche generate in `dist/`.
- `npm run check:a11y`: passato, 48 pagine HTML controllate.
- QA browser responsive, tastiera/focus/reduced motion, link esterni e deploy: non
  ancora eseguiti.

## Risorse da escludere dal porting automatico

Non portare CSS/JS WordPress, Google Tag Manager, reCAPTCHA, Cookiebot, chat, embed,
font remoti o librerie di terze parti. Gli asset `wp-content` sono candidati soltanto
dopo verifica visuale, dimensione, diritti e testo alternativo. I PDF regolamentari
vanno mantenuti come documenti approvati, non riscritti automaticamente.
