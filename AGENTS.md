# Tinaba / Banca Profilo — nuovo sito Astro

## Obiettivo

Ricostruire il sito pubblico di Tinaba con Astro, partendo dai contenuti verificabili
nel mirror WordPress locale e introducendo una nuova identità visiva istituzionale:
elegante, sobria, affidabile e chiaramente digitale.

La promessa editoriale di riferimento è:

> **I soldi, come devono funzionare.**

Principio istituzionale non negoziabile: Banca Profilo è il soggetto bancario titolare
della licenza; Tinaba è l’abilitatore tecnologico e operativo. Copy, gerarchia visuale,
footer, pagine prodotto e riferimenti istituzionali devono mantenere sempre questa
distinzione e non rappresentare Tinaba come banca.

Il sito deve parlare soprattutto a persone tra 25 e 40 anni, usando il “tu”, con un tono
umano e semplice ma compatibile con una banca regolamentata. L’ispirazione funzionale
può prendere il meglio di Cash App, Monzo, Revolut e Wise — chiarezza, ritmo, prodotto
visibile, copy conversazionale — senza copiarne stile, asset o linguaggio.

## Fonte dei contenuti

- Il mirror è in `httrack/`.
- `httrack/bancaprofilo-www/index.html` è soltanto l’indice locale di HTTrack e non è la
  homepage del sito.
- La fonte principale della homepage è
  `httrack/bancaprofilo-www/tinaba.bancaprofilo.it/index.html`.
- Le altre pagine HTML nello stesso percorso sono la fonte primaria per contenuti,
  struttura informativa, titoli, link e terminologia.
- Gli asset locali WordPress sono in
  `httrack/bancaprofilo-www/tinaba.bancaprofilo.it/wp-content/` e possono essere
  riutilizzati dopo verifica di pertinenza, qualità, dimensioni, diritti e testo
  alternativo.
- Il mirror contiene anche copie di risorse tecniche e di terze parti. Non importare
  automaticamente tracking, reCAPTCHA, Google Tag Manager, Cookiebot, chat esterne,
  embed, font remoti o script WordPress.
- Il mirror è una fonte editoriale e visiva, non una fonte sufficiente per inventare
  condizioni economiche, dati regolamentari, claim finanziari o informazioni legali. Per
  questi contenuti conservare il testo approvato e segnalare i dati mancanti.

## Stack e confini

- Usare Astro con output statico prerenderizzato.
- Creare il progetto sorgente in una struttura Astro standard (`src/pages`,
  `src/components`, `src/layouts`, `src/content` o `src/data`, `public`), documentando
  la scelta effettiva quando verrà inizializzato.
- Non migrare template o dipendenze WordPress; estrarre e riscrivere contenuti e
  componenti.
- Tenere separati contenuti, layout, token visuali e asset.
- Non modificare il mirror per trasformarlo nel sito finale: il mirror resta materiale
  di riferimento.
- GitHub Pages è documentato esclusivamente come preview tramite GitHub Actions, con
  pubblicazione dell’artifact generato da `dist/`; non trattarlo come deploy di
  produzione né come deploy eseguito finché non esiste una verifica operativa.
- Nessun backend, account, checkout o onboarding funzionante va simulato nel sito
  statico. I link di prodotto devono puntare alle destinazioni approvate e verificabili.

## Direzione visiva

### Posizionamento

Design istituzionale con energia digitale: non una landing “tech bro”, non un collage di
promo, non un clone di una neobank estera. Il risultato deve trasmettere solidità,
controllo e semplicità.

### Sistema visivo iniziale

- Palette sobria basata su fondo caldo chiaro, blu notte/ink per il testo e un solo
  accento Tinaba deciso, da ricavare e verificare dagli asset approvati del mirror.
- Evitare l’uso indiscriminato di molti colori promozionali. Gli accenti secondari
  servono solo a distinguere stati, categorie o messaggi già presenti nei contenuti
  approvati.
- Tipografia elegante, leggibile e locale/self-hosted quando possibile. Definire una
  scala tipografica con un display autorevole per titoli e un sans molto leggibile per
  interfaccia e corpo testo.
- Ampio respiro, griglia editoriale, bordi contenuti e card usate per gerarchia
  informativa, non come decorazione automatica.
- Contrasto, focus, riduzione del movimento e comportamento mobile sono requisiti
  progettuali, non rifiniture successive.

### Homepage proposta

1. Header minimale con logo Tinaba, navigazione per prodotto e una sola CTA primaria:
   **Apri il conto**.
2. Hero con la tagline **I soldi, come devono funzionare.**, una frase di supporto
   concreta e una preview del prodotto (carta/app/dashboard) usando asset reali o
   composizioni CSS/SVG approvate.
3. Fascia di fiducia integrata nella narrazione: Banca Profilo, riferimenti
   regolamentari/istituzionali approvati, partnership e dati verificabili.
4. Sezione “Tutto quello che ti serve” organizzata per bisogni: pagare, condividere,
   risparmiare, investire, viaggiare.
5. Sezione prodotto con carta, conto, piani e principali funzionalità, con CTA coerenti
   e non ripetitive.
6. Sezione editoriale “Oltre il prodotto” per community, valori, charity e iniziative.
7. News/promozioni con gerarchia controllata: il contenuto commerciale non deve dominare
   la comprensione del prodotto.
8. Footer completo con assistenza, società, documenti legali, accessibilità,
   privacy/cookie e link istituzionali.

### Interazioni

- Animazioni brevi, sottili e funzionali: entrate progressive, micro-interazioni su
  carta e dashboard, hover/focus leggibili.
- Nessuna animazione indispensabile alla comprensione.
- Rispettare `prefers-reduced-motion`.
- Evitare slider automatici non necessari; se una fonte editoriale li richiede, fornire
  controlli da tastiera, stato annunciato e pausa.
- Non usare 3D o video pesanti come requisito del primo rilascio: introdurli solo se
  migliorano davvero il messaggio e hanno asset/diritti verificati.

## Architettura dei contenuti

La prima ricognizione del mirror individua almeno questi nuclei da mappare in pagine o
sezioni:

- home;
- carta;
- conto e piani;
- conto deposito;
- conto titoli e investimenti;
- cripto;
- pagamenti, gruppi e denaro collaborativo;
- Apple Pay, Google Pay, American Express, gift card ed e-commerce;
- viaggi e vantaggi;
- business;
- community, charity, ambassador e valori;
- chi siamo e Banca Profilo;
- area stampa e news;
- aiuto, accessibilità, documenti legali e impostazioni cookie.

Prima dell’implementazione definire una matrice contenuti con: URL sorgente, titolo,
scopo, audience, CTA, asset, claim sensibili, stato di approvazione e nuova route Astro.
Non perdere silenziosamente pagine utili del mirror e non portare nel nuovo sito pagine
tecniche generate da WordPress.

## Privacy, sicurezza e accessibilità

- Sito statico e senza tracking per impostazione predefinita.
- Nessun analytics, pixel, advertising, profiling, cookie non necessari, font CDN o
  embed di terze parti.
- Mantenere una pagina privacy/cookie coerente con il runtime effettivo. Se mancano dati
  del titolare, finalità, basi giuridiche, conservazione o responsabili, fermarsi sul
  punto e segnalarlo.
- WCAG 2.2 AA come baseline operativa: landmark semantici, un solo `h1` significativo
  per pagina, gerarchia corretta, skip link, link descrittivi, alt text, focus visibile,
  tastiera, reflow mobile, contrasto e stati ridotti.
- Tutti i font usati nel rendering iniziale devono essere locali e caricati con
  dimensioni/weight necessari e senza layout shift evitabile.
- Le immagini informative devono avere alt text utile; quelle decorative `alt=""`.
- Non presentare condizioni, rendimenti o benefici finanziari come garantiti. Mantenere
  disclaimer e documentazione approvati.

## Piano operativo

### Fase 0 — baseline e inventario

1. Verificare stato Git, eventuali file nascosti e configurazione del repository.
2. Inizializzare Astro solo dopo avere confermato package manager, target di deploy e
   convenzioni locali.
3. Catalogare pagine, titoli, CTA, asset, font e link del mirror.
4. Separare contenuti editoriali, promozioni temporanee, dati regolamentari e risorse
   tecniche.
5. Produrre una matrice route/contenuto e una lista di domande editoriali/legal da
   risolvere.

### Fase 1 — fondazioni del design

1. Definire token colore, tipografia, spaziature, griglia, radius, ombre, breakpoint e
   motion.
2. Definire layout globale, header, footer, CTA, card, badge di fiducia, link e
   componenti di contenuto.
3. Stabilire il trattamento di logo, carta/app preview e immagini editoriali.
4. Verificare una prima homepage responsive in desktop, tablet e mobile, inclusi focus e
   reduced motion.

### Fase 2 — homepage verticale

1. Implementare la homepage completa come percorso end-to-end.
2. Usare prima contenuti e asset già verificati nel mirror.
3. Collegare CTA a destinazioni reali approvate, senza fingere flussi di registrazione.
4. Validare struttura semantica, performance, font locali, assenza di richieste esterne
   e qualità visuale.

### Fase 3 — pagine prodotto e istituzionali

1. Portare le pagine prodotto con template riusabili e dati strutturati.
2. Portare business, community, valori, chi siamo, assistenza e stampa.
3. Portare documenti legali, accessibilità, privacy/cookie e redirect/compatibilità URL
   solo dopo inventario.
4. Eliminare duplicati e pagine obsolete identificati durante la revisione.

### Fase 4 — verifica e consegna

1. Eseguire build Astro, lint, type-check e test disponibili.
2. Controllare route, metadata, immagini, font, link interni/esterni e output statico.
3. Eseguire controllo no-tracking su sorgenti e pagine generate.
4. Fare QA browser manuale su homepage e campioni rappresentativi, con viewport
   stretto/largo, tastiera, focus, hover e reduced motion.
5. Riportare separatamente build/test, QA visuale, accessibilità, privacy/no-tracking e
   deploy; non dichiarare verifiche non eseguite.
6. Chiudere `docs/release-checklist.md` prima della pubblicazione e conservare separate
   le evidenze tecniche dalle approvazioni editoriali/legal.
7. Aggiornare questo file quando cambiano stack, source/output boundary, direzione di
   marca, contenuti approvati o destinazione di pubblicazione.

Nota operativa Windows: se `npm run build` o una prova browser restituisce `spawn EPERM`,
classificare l'esito come blocco dell'ambiente di esecuzione e non come errore del codice.
Non attribuire automaticamente l'errore a un eventuale server `npm run dev`: un processo
locale aperto può causare un conflitto di porta, ma non spiega di per sé `spawn EPERM`.
Riprovare subito il comando in un ambiente autorizzato. Registrare separatamente il
fallimento nella sandbox, il retry autorizzato e gli eventuali conflitti di porta; non
considerare superato il gate finché il comando interessato non è terminato con successo.

### Configurazione corrente

- La homepage e il template editoriale Astro sono implementati; il contenuto è
  strutturato nei moduli tipizzati di `src/data/editorial/`, aggregati da
  `src/data/pages.ts`; il layout globale delega le sezioni specialistiche al registry
  `src/data/editorial/section-registry.ts` e ai componenti di `src/components/editorial/`.
- Sono disponibili 49 pagine HTML statiche: homepage, le panoramiche `/soluzioni/` e
  `/brand-guidelines/`, e 44 route editoriali per prodotto, pagamenti, condivisione,
  risparmio, investimenti, piani, business, community, chi siamo, assistenza, documenti,
  accessibilità, privacy e cookie. “Soluzioni” è l’ingresso all’offerta complessiva;
  `/carta/` resta una pagina prodotto.
- La route `pagamenti/alipay-plus/` completa il nucleo “Viaggiare”. Tinaba resta
  l’abilitatore digitale e Banca Profilo il soggetto bancario di riferimento.
- Nel source boundary sono presenti asset visuali locali selezionati e verificati, due
  loghi duplicati nei percorsi runtime richiesti e quattro documenti PDF selezionati dal
  mirror. Non sono stati importati script, CSS, tracking o template WordPress.
- La favicon ufficiale Tinaba è copiata in `public/favicon.png` dalla variante 32×32 del
  mirror e viene dichiarata dal layout globale Astro.
- La build genera output statico in `dist/`; la preview usa GitHub Pages tramite
  `.github/workflows/deploy-pages.yml`, che pubblica `dist/` come artifact. La
  pubblicazione di produzione resta separata.
- I link interni passano da `sitePath()` in `src/config/site.ts`, così il prefisso del
  project site GitHub Pages (`/bancaprofilo-www/`) viene mantenuto anche nelle route
  editoriali e nelle card generate dai dati.
- La sitemap statica è disponibile in `/sitemap.xml` e usa
  `https://tinaba.bancaprofilo.it` come base canonica; sostituire la base se il dominio
  pubblico definitivo sarà diverso.
- La compatibilità con i vecchi URL non è inclusa nel rilascio corrente.
- La route `/news/` mantiene l’archivio editoriale completo delle 40 card presenti nella
  sezione news del mirror locale, con le iniziative concluse marcate come archivio e
  senza presentarle come offerte attive.
- La route `/piani/` usa un blocco dedicato di confronto, ispirato alla struttura della
  pagina originale `confronta-i-piani.html`: tre schede di scelta e una tabella sintetica
  per bisogni. Non importa il vecchio layout o gli script WordPress; prezzi, commissioni,
  limiti e disponibilità restano subordinati alla documentazione aggiornata.
- Il controllo strutturale A11Y ripetibile è `npm run check:a11y` e verifica tutte le
  pagine HTML generate. I controlli correnti coprono 49 pagine dopo l’aggiunta di
  `/brand-guidelines/`; `npm run check` non deve produrre errori, warning o hint e
  `npm run build` deve generare l’intero output statico.
- La QA browser responsive, tastiera, reduced motion, verifica completa dei link esterni
  e il deploy restano attività manuali da eseguire prima della pubblicazione.
- Il CSS editoriale è organizzato per responsabilità in `src/styles/editorial/` e raccolto
  da un foglio indice importato globalmente dal layout; gli snapshot specialistici sono in
  `tests/visual/site.visual.spec.ts-snapshots/`.
- Il riepilogo operativo e le questioni aperte sono mantenuti in
  `docs/project-status.md` e `docs/editorial-legal-questions.md`.
- Il file pubblico `public/llms.txt` offre una sintesi selettiva per crawler e sistemi
  generativi: include identità, ruoli istituzionali, aree dell’offerta, assistenza e
  link verificabili, ma non sostituisce i documenti ufficiali né importa il runbook
  interno o claim non verificati.
- Le URL canoniche e le destinazioni esterne applicative sono centralizzate in
  `site.config.mjs`, con accesso tipizzato da `src/config/site.ts`; ogni nuova destinazione
  operativa deve essere aggiunta lì prima dell’uso nei componenti o nei dati editoriali.

### Decisioni di design

- La route `/chi-siamo/` usa una pagina dedicata, allineata alla struttura editoriale
  verificata nel mirror: hero illustrato, piattaforma aperta, tre principi, community e
  recruiting. Gli asset locali selezionati sono copiati in `public/assets/about/`; non
  vengono importati script, modal, rating o metriche non verificate dal runtime originale.

- La homepage usa l’arancione Tinaba derivato dagli asset approvati come unico accento
  di marca: CTA, focus e segnali di navigazione. I colori secondari non definiscono più
  categorie prodotto concorrenti.
- Il hero usa l’asset app verificato `public/assets/editorial/hero-app-wallet.png` come
  immagine principale; il fondale è costruito con forme CSS blu notte e arancioni, senza
  ritagli sovrapposti né la grafica dei sistemi di pagamento della schermata carta. La
  fascia istituzionale è separata dal hero e chiarisce i ruoli di Banca Profilo, Tinaba
  e della documentazione, senza badge o metriche non verificati.
- La tipografia del sito usa localmente Manrope, distribuito dal pacchetto open source
  `@fontsource/manrope` con pesi 400 e 700; non vengono introdotti font remoti.
- Per la conformità al contrasto WCAG AA, l’arancione ufficiale Tinaba è `#FF5E00` e
  resta invariato per superfici, bordi, icone e segnali decorativi. Non va usato come
  testo piccolo su fondo chiaro né con testo bianco nelle CTA: le CTA usano testo
  `--ink`, i testi su fondo chiaro usano `--ink` o `--accent-dark` (`#A83900`) e il
  footer scuro usa la variante chiara `#ffb08a` per titoli e focus.
- La homepage deve mantenere sempre esattamente tre card nella sezione news/highlight:
  la card “Alipay+ si espande” non va reinserita. Promozioni, prezzi, tassi e condizioni
  restano nell’archivio/news o nelle pagine prodotto, dove possono essere verificati e
  aggiornati separatamente.
- L’header resta visibile durante lo scroll e indica la route corrente con
  `aria-current`; non viene introdotta una CTA di accesso finché non è disponibile una
  destinazione operativa approvata.
- La navigazione primaria mantiene solo Soluzioni, Piani, Chi siamo e Assistenza,
  oltre ad Accedi e alla CTA Apri il conto. Business resta nel footer e ha un richiamo
  contestuale nella homepage e nella panoramica `/soluzioni/`. News,
  Promozioni, Community e Investiamo sono destinati al footer, con Investiamo indicato
  come collegamento esterno di Banca Profilo.
- La route `/brand-guidelines/` resta una pagina pubblica e continua a documentare
  principi, palette, tipografia e regole di accessibilità del sistema visivo.
- Le superfici arancioni Tinaba usano testo `--ink` anche nelle CTA editoriali estese:
  non usare testo bianco su `#FF5E00`. I controlli principali dell’header mobile devono
  mantenere un’altezza minima di 44px e gli ancoraggi devono considerare l’header sticky.
- Le pagine prodotto condividono nel layout editoriale una gerarchia stabile per riepilogo,
  prossimo passo e documentazione: il richiamo informativo è generale e non sostituisce
  condizioni, costi, rischi o documenti ufficiali specifici del servizio.
- La pagina `/pagamenti/alipay-plus/` include una sezione dedicata con mappa locale,
  flusso d’uso, elenco indicativo dei paesi presenti nel mirror e PDF di dettaglio.
  L’elenco e la mappa sono informativi e accompagnati dall’avvertenza che copertura,
  esercenti e modalità operative possono cambiare.
- Header, menu mobile, link di navigazione e social footer mantengono target interattivi
  di almeno 44px, senza introdurre controlli o animazioni indispensabili alla comprensione.

## Regole di lavoro

- Prima di modificare codice leggere questo file e controllare il diff.
- Conservare le modifiche preesistenti e non sovrascrivere il mirror.
- Usare modifiche piccole e verificabili; non generare un’intera nuova grafica senza
  prima validare una homepage verticale.
- Per copy, condizioni economiche, dati regolamentari e legali usare il mirror solo come
  punto di partenza e chiedere evidenza/approvazione quando il testo non è
  determinabile.
- Nei testi editoriali e istituzionali usare sempre la formula “Tinaba di Banca
  Profilo”; non usare “Tinaba con Banca Profilo”.
- Formattare i sorgenti in modo leggibile anche senza formatter automatici: evitare
  linee eccessivamente lunghe, distribuire markup, attributi, proprietà CSS, oggetti e
  array su più righe quando migliora la lettura umana.
- Non introdurre Prettier o altri formatter come dipendenze obbligatorie per risolvere
  la leggibilità; privilegiare una formattazione manuale coerente con il contesto Astro
  e verificare il diff dopo ogni intervento.
- Documentare ogni decisione architetturale o editoriale duratura qui.
- Il pilota del flusso editoriale AI on-demand è documentato in
  `docs/marketing-agent/`: i colleghi usano Codex sul repository locale, descrivono
  direttamente le modifiche, avviano una preview locale e consegnano il lavoro tramite
  branch e pull request. Slack e un journal separato non fanno parte del flusso. Le
  modifiche economiche, finanziarie, legali e regolamentari richiedono approvazione
  esplicita; la richiesta o la PR non autorizzano da sole la pubblicazione in produzione.
