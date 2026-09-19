# Inventario contenuti — baseline mirror

Approvazione contenuti: è stato autorizzato l’uso nel nuovo sito dei contenuti legali, delle condizioni economiche, dei recapiti e degli asset con diritti verificati presenti nel mirror. Il porting Astro resta comunque selettivo: non importa tracking, script, template WordPress o risorse tecniche.

## Perimetro verificato

- Fonte homepage: `httrack/bancaprofilo-www/tinaba.bancaprofilo.it/index.html`.
- File nel mirror del sito: 3.515.
- HTML complessivi: 1.145.
- Asset sotto `wp-content/`: 772, di cui 512 PNG, 101 PDF, 91 SVG, 11 JPG.
- Font locali presenti nel mirror: Objectiv e Font Awesome, in più formati.
- I file `index` con suffisso esadecimale e titolo `Page has moved` sono copie tecniche HTTrack e non route editoriali.
- `com.html`, `net.html`, `optusnet.com.html` e `popper.html` sono pagine di errore/cattura e non entrano nella nuova architettura.

## Homepage osservata

La fonte contiene queste aree editoriali principali:

- hero/promozioni e registrazione per privati o business;
- “Cosa ti serve?”: banking, sharing, finance e rewarding;
- “Con chi puoi usarla”: carta/app e pagamenti;
- piani Start, Premium e Under18, con confronto;
- “Oltre il prodotto”: missione, educazione finanziaria e community;
- news e promozioni;
- footer con assistenza, società, documenti e link istituzionali.

La promessa di progetto resta `I soldi, come devono funzionare.`; il titolo oggi presente nel mirror è invece `Paga, Gestisci e Condividi Denaro Senza Vincoli` e va trattato come contenuto legacy da riscrivere/approvare.

## Matrice route/contenuto

Stato `da verificare` significa che il mirror è una fonte editoriale, ma non è sufficiente per approvare condizioni economiche, claim finanziari, dati regolamentari o testi legali.

| URL sorgente | Titolo/ambito | Scopo e audience | CTA/asset da ricontrollare | Claim sensibili | Nuova route Astro | Stato |
|---|---|---|---|---|---|---|
| `/index.html` | Homepage | Orientamento per privati e business | Apri il conto; hero, carta/app, news | bonus, tassi, partnership | `/` | da verificare |
| `/carta.html` | Carta Mastercard | Presentare carta e uso quotidiano | Richiesta/registrazione; immagini carta | costi, circuito, condizioni | `/carta/` | da verificare |
| `/start.html` | Piano Start | Conto e carta base | Scopri Start | prezzi e servizi inclusi | `/piani/start/` | da verificare |
| `/premium.html` | Piano Premium | Membership e vantaggi | Scopri Premium | prezzo, sconti, vantaggi | `/piani/premium/` | da verificare |
| `/minorenni.html` | Under18 | Prodotto per minori e famiglie | Scopri Under18 | titolarità, limiti, consenso | `/piani/under18/` | da verificare |
| `/confronta-i-piani.html` | Confronto piani | Aiutare la scelta | Confronta | prezzi e condizioni | `/piani/` | da verificare |
| `/wallet.html` | Wallet | Presentare gestione denaro | Registrati | funzioni e disponibilità | `/wallet/` | da verificare |
| `/trasferimenti.html` | Trasferimenti | Pagamenti e trasferimenti | Approfondisci | limiti, tempi, costi | `/pagamenti/trasferimenti/` | da verificare |
| `/gruppi.html` | Gruppi | Spese condivise | Crea un gruppo | funzionamento e limiti | `/condivisione/gruppi/` | da verificare |
| `/denaro-collaborativo.html` | Denaro collaborativo | Raccolte e spese condivise | Scopri di più | responsabilità e uso | `/condivisione/` | da verificare |
| `/raccogli-soldi.html` | Raccogli soldi | Raccolte per privati/progetti | Raccogli soldi | flussi e commissioni | `/condivisione/raccolte/` | da verificare |
| `/risparmi.html` | Risparmi | Orientamento al risparmio | Scopri di più | rendimento/garanzie | `/risparmio/` | da verificare |
| `/salvadanaio.html` | Salvadanaio | Obiettivi di risparmio | Scopri di più | condizioni e disponibilità | `/risparmio/salvadanaio/` | da verificare |
| `/conto-deposito.html` | Conto Deposito | Prodotto di deposito | Scopri il conto | tasso fino al 3,20%, condizioni | `/risparmio/conto-deposito/` | da verificare |
| `/investimenti.html` | Roboadvisor | Investimenti per privati | Investi | rischio, rendimento, profilazione | `/investimenti/roboadvisor/` | da verificare |
| `/conto-titoli.html` | Conto Titoli | Investimenti autonomi | Apri/approfondisci | costi, rischi, soglie | `/investimenti/conto-titoli/` | da verificare |
| `/cripto.html` | Cripto | Acquisto e vendita cripto | Approfondisci | rischi e costi | `/investimenti/cripto/` | da verificare |
| `/pagamenti-mondiali.html` | Pagamenti mondiali | Uso internazionale | Scopri di più | paesi, cambio, costi | `/pagamenti/mondiali/` | da verificare |
| `/apple-pay.html` | Apple Pay | Pagamenti smart | Attiva/approfondisci | compatibilità | `/pagamenti/apple-pay/` | da verificare |
| `/google-pay.html` | Google Pay | Pagamenti smart | Attiva/approfondisci | compatibilità | `/pagamenti/google-pay/` | da verificare |
| `/american-express.html` | American Express | Integrazione carta | Scopri di più | partnership e disponibilità | `/pagamenti/american-express/` | da verificare |
| `/gift-card.html` | Gift Card | Regali e pagamenti | Scopri le gift card | partner e condizioni | `/pagamenti/gift-card/` | da verificare |
| `/e-commerce.html` | Tinaba Pay | Merchant e organizzazioni | Contatti/approfondisci | disponibilità del servizio | `/business/e-commerce/` | da verificare |
| `/business.html` | Tinaba Business | Attività e aziende | Dashboard/contatti | offerta e onboarding | `/business/` | da verificare |
| `/charity.html` | Charity | Raccolta contributi | Scopri di più | beneficiari e flussi | `/community/charity/` | da verificare |
| `/wishope.html` | WISHOPe | Merchant/community | Visita WISHOPe | partner e offerte | `/community/wishope/` | da verificare |
| `/community.html` | Community | Vantaggi e iniziative | Scopri la community | promozioni | `/community/` | da verificare |
| `/ambassador.html` | Ambassador | Programma ambassador | Candidati | compensi/criteri | `/community/ambassador/` | da verificare |
| `/form-ambassador.html` | Form ambassador | Candidatura | Invio form | privacy e trattamento dati | da decidere | non portare senza backend |
| `/i-nostri-valori.html` | Valori | Identità e cultura | Approfondisci | claim istituzionali | `/chi-siamo/valori/` | editoriale |
| `/chi-siamo.html` | Chi siamo | Presentazione Tinaba | Scopri di più | dati societari | `/chi-siamo/` | da verificare |
| `/la-storia.html` | Storia | Cronologia aziendale | Approfondisci | date e fatti | `/chi-siamo/storia/` | editoriale |
| `/banca-profilo.html` | Banca Profilo | Fiducia e contesto bancario | Link istituzionale | dati regolamentari | `/banca-profilo/` | approvazione istituzionale |
| `/area-stampa.html` | Area stampa | Giornalisti e news | Download/contatti | comunicati e dati | `/stampa/` | da verificare |
| `/money-20-20.html` | Money20/20 | News/evento | Archivio | contenuto temporale | `/news/` | archivio |
| `/aiuto.html` | Assistenza | Supporto utenti | Supporto esterno | contatti e SLA | `/assistenza/` | da verificare |
| `/manuale-d-uso.html` | Manuale d’uso | Guida prodotto | Download | versioni e validità | `/assistenza/manuale/` | da verificare |
| `/sicurezza.html` | Sicurezza | Educazione e protezione | Approfondisci | responsabilità e sicurezza | `/assistenza/sicurezza/` | editoriale |
| `/accessibilita.html` | Trasparenza/accessibilità | Accessibilità e trasparenza | Documenti | conformità e contatti | `/accessibilita/` | legale da verificare |
| `/documenti-legali.html` | Documenti legali | Raccolta documenti | Download | validità documenti | `/documenti/` | legale da verificare |
| `/trasparenza-bancaria-tinaba.html` | Trasparenza bancaria | Informativa regolamentare | Download | dati bancari | `/documenti/trasparenza/` | legale da verificare |
| `/reclami-e-disconoscimenti.html` | Reclami e disconoscimenti | Canali formali | Contatti/documenti | termini e recapiti | `/documenti/reclami/` | legale da verificare |
| `/informativa-privacy-sito.html` | Privacy sito | Informativa runtime | Link documento | titolare, basi, retention | `/privacy/` | blocco approvazione |
| `/informativa-sulla-privacy.html` | Privacy generale | Informativa legacy | Link documento | titolare, basi, retention | da decidere | possibile duplicato |
| `/impostazioni-cookie.html` | Cookie | Preferenze cookie | Gestione preferenze | cookie effettivi | `/cookie/` | da verificare, no cookie default |
| `/promozioni-e-regolamenti*.html` | Promozioni e regolamenti | Archivio promo | Regolamenti | bonus, date, scadenze | `/promozioni/` | separare attive/scadute |
| `/promo-scuola.html` | Promo scuola | Iniziativa temporanea | Aderisci ora | requisiti e validità | `/promozioni/scuola/` | da verificare |
| `/power.html` | Power | Piano/promozione legacy | Approfondisci | prezzi e condizioni | da decidere | possibile obsolescenza |
| `/un-mondo-di-pay.html` | Smart payment | Hub pagamenti | Approfondisci | partner e disponibilità | `/pagamenti/` | da verificare |

## Porting implementato

Sono stati portati in `src/data/pages.ts` 44 contenuti editoriali per carta, wallet, trasferimenti, gruppi, raccolte, risparmio, Salvadanaio, Conto Deposito, Roboadvisor, Conto Titoli, cripto, pagamenti mondiali, Alipay+, smart payment, piani, chi siamo, Banca Profilo, business, e-commerce, community, charity, WISHOPe, ambassador, assistenza, sicurezza, documenti, reclami, accessibilità, privacy, cookie, news, promozioni e stampa. Insieme alla homepage e alle panoramiche `/soluzioni/` e `/brand-guidelines/`, il build statico produce 47 pagine HTML. In `public/` sono presenti asset visuali locali selezionati, la favicon Tinaba e quattro PDF selezionati dal mirror.

## Confini del porting attuale

- Il sorgente Astro è in `src/`; gli asset pubblici e i PDF sono in `public/`; l’output statico è `dist/`.
- Il progetto usa Astro 5, TypeScript e npm. Non esiste un backend, un account, un checkout o un onboarding simulato nel repository.
- I link operativi usano destinazioni esterne già presenti e selezionate, in particolare `onboarding.bancaprofilo.it`; la destinazione definitiva resta una decisione editoriale/operativa aperta.
- Il porting non comprende compatibilità automatica con gli URL legacy, promozioni separate, area stampa completa o il form ambassador senza endpoint approvato.
- Il progetto non introduce analytics, pixel, advertising, profiling, Cookiebot, Google Tag Manager, chat, embed o font remoti.

## Verifiche automatiche

- `npm run check`: passato, 0 errori, 0 warning e 0 hint.
- `npm run build`: passato, 47 pagine statiche generate in `dist/`.
- `npm run check:a11y`: passato, 47 pagine HTML controllate.
- QA browser responsive, tastiera/focus/reduced motion, link esterni e deploy: non ancora eseguiti.

## Risorse da escludere dal porting automatico

Non portare CSS/JS WordPress, Google Tag Manager, reCAPTCHA, Cookiebot, chat, embed, font remoti o librerie di terze parti. Gli asset `wp-content` sono candidati soltanto dopo verifica visuale, dimensione, diritti e testo alternativo. I PDF regolamentari vanno mantenuti come documenti approvati, non riscritti automaticamente.
