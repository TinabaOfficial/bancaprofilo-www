# Perimetro e verifiche del progetto

- Sito Astro statico con output in `dist/`.
- Homepage Tinaba e layout editoriale riusabile.
- 44 route editoriali oltre alla homepage, più `/soluzioni/`, `/brand-guidelines/`,
  `/promozioni/scuola/` e la pagina tecnica `/404.html`, per 49 pagine HTML generate.
- Contenuti strutturati in `src/data/editorial/`, aggregati da `src/data/pages.ts`, con
  componenti globali per header e footer, sitemap statica e `robots.txt`.
- Route prodotto, pagamenti, condivisione, risparmio, investimenti, piani, business,
  community, chi siamo, assistenza, documenti, accessibilità, privacy e cookie.
- Route Viaggiare per Alipay+, con Tinaba descritta come abilitatore digitale e Banca
  Profilo come soggetto bancario.
- Asset visuali locali selezionati e verificati, loghi locali e documenti PDF
  regolamentari, privacy, disconoscimento e stampa selezionati dal mirror.
- Le immagini applicative sono migrate in `src/assets/media/` e vengono renderizzate tramite
  `astro:assets`: il build ottimizza gli asset usati, inclusi i source responsive di
  `AssetPicture.astro`, e genera dimensioni intrinseche, URL hashati e conversioni WebP.
- Il layout editoriale principale delega le sezioni specialistiche a componenti dedicati in
  `src/components/editorial/`; i dati sono tipizzati in `src/data/editorial/types.ts`.
- Il registry tipizzato in `src/data/editorial/section-registry.ts` separa la selezione delle
  sezioni specialistiche dalle condizioni del layout e il modello discrimina pagine prodotto,
  istituzionali e di assistenza.
- Le URL operative ed esterne sono centralizzate in `site.config.mjs`, esposte al codice
  Astro da `src/config/site.ts` e utilizzate da config Astro, sitemap, consenso, header,
  footer, homepage, news, prodotti e promozioni.
- Il CSS editoriale è suddiviso per responsabilità in `src/styles/editorial/` e mantenuto
  compatibile tramite l’indice importato dal layout globale.
- `npm run audit:assets` mantiene il catalogo tecnico degli asset: al momento risultano 62
  asset sorgente, senza candidati inutilizzati e con un solo duplicato intenzionale.
- `npm run test:visual` verifica snapshot responsive e regressioni di overflow su homepage,
  `/chi-siamo/` e cinque percorsi specialistici: piani, investimenti, community, assistenza
  e Alipay+.
- Gli stili dei componenti, layout e pagine sono estratti in `src/styles/extracted/`; la
  base globale resta in `src/styles/base.css`, con token e primitive condivise in
  `src/styles/tokens.css` e `src/styles/components.css`.
- Hero homepage con un asset di wallet/carta reale, selezionato dal mirror e copiato nel
  source boundary; fascia istituzionale articolata per Banca Profilo, Tinaba e
  trasparenza documentale.
- L’arancione Tinaba è l’unico accento di marca per CTA, focus e segnali di navigazione;
  le aree prodotto non usano più palette concorrenti.
- La voce di navigazione “Soluzioni” porta a `/soluzioni/`, un riepilogo dell’offerta
  per conto e carta, pagamenti, condivisione, risparmio, investimenti e business.
  `/carta/` resta una pagina prodotto specifica.
- Il runtime può usare Cookiebot e Google Tag Manager solo con `PUBLIC_CONSENT_ENABLED=true`,
  `PUBLIC_COOKIEBOT_ID` e `PUBLIC_GTM_ID` configurati, e solo sull’hostname di produzione
  `tinaba.bancaprofilo.it`. Preview e localhost restano senza richieste a terze parti.
  L’abilitazione resta subordinata alla chiusura delle verifiche privacy e consenso.
- `npm run validate` esegue in sequenza Astro check, build statico, controllo dei riferimenti
  locali nell’output e controllo strutturale A11Y.
- La dev toolbar A11Y di Astro è riabilitata con Astro 5.18; la compatibilità viene lasciata
  alla gestione standard di Vite del pacchetto CommonJS `axobject-query` e la presenza della
  toolbar è coperta dalla verifica browser locale.
- Il build corrente genera 49 pagine HTML, inclusi `/news/`, `/soluzioni/`,
  `/brand-guidelines/`, `/promozioni/scuola/` e `/sitemap.xml`.

## Controlli automatici

- Astro check: passato; 0 errori, 0 warning e 0 hint.
- Build statico: passato; 49 pagine generate, inclusa `/sitemap.xml`, in `dist/`.
- Controllo strutturale A11Y: passato; 49 pagine HTML controllate da
  `npm run check:a11y`.
- Audit SEO/output: passato; title, description, canonical, robots e sitemap presenti
  sulle 49 pagine generate. Verificati anche 1.723 link interni e 5 riferimenti PDF,
  senza destinazioni locali mancanti.
- QA browser responsive: completata su viewport stretto e largo per homepage e pagine
  rappresentative (carta, piani, news, assistenza e brand guidelines); tutte le route
  rappresentative rispondono `200` dal server locale attivo.
- QA tastiera, focus e reduced motion: da eseguire; non registrata nel repository.
- Verifica link esterni: da eseguire; richiede il controllo operativo delle
  destinazioni.
- Preview: workflow GitHub Pages configurato; la preview non è ancora verificata con
  un’esecuzione riuscita del workflow.
- Produzione: deploy separato non eseguito.

## Decisioni operative

- La preview è pubblicata tramite `.github/workflows/deploy-pages.yml`, che ricostruisce
  Astro e pubblica `dist/` come artifact su GitHub Pages. GitHub Pages non è il canale
  di produzione.
- La base canonica corrente della sitemap è `https://tinaba.bancaprofilo.it`.
- Il mirror `httrack/` resta materiale di riferimento e non viene modificato.
- La compatibilità con gli URL legacy non rientra nel rilascio corrente.

Le attività pre-produzione sono raccolte in `docs/release-checklist.md`. Le domande
editoriali e legal sono raccolte in `docs/editorial-legal-questions.md`; la matrice
delle fonti è in `docs/content-inventory.md`.
