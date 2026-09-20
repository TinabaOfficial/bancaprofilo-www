# Perimetro e verifiche del progetto

- Sito Astro statico con output in `dist/`.
- Homepage Tinaba e layout editoriale riusabile.
- 44 route editoriali oltre alla homepage, più `/soluzioni/`, `/brand-guidelines/` e la
  pagina dedicata `/promozioni/scuola/`, per 48 pagine HTML generate.
- Contenuti strutturati in `src/data/pages.ts`, componenti globali per header e footer,
  sitemap statica e `robots.txt`.
- Route prodotto, pagamenti, condivisione, risparmio, investimenti, piani, business,
  community, chi siamo, assistenza, documenti, accessibilità, privacy e cookie.
- Route Viaggiare per Alipay+, con Tinaba descritta come abilitatore digitale e Banca
  Profilo come soggetto bancario.
- Asset visuali locali selezionati e verificati, loghi locali e documenti PDF
  regolamentari, privacy, disconoscimento e stampa selezionati dal mirror.
- Hero homepage con un asset di wallet/carta reale, selezionato dal mirror e copiato nel
  source boundary; fascia istituzionale articolata per Banca Profilo, Tinaba e
  trasparenza documentale.
- L’arancione Tinaba è l’unico accento di marca per CTA, focus e segnali di navigazione;
  le aree prodotto non usano più palette concorrenti.
- La voce di navigazione “Soluzioni” porta a `/soluzioni/`, un riepilogo dell’offerta
  per conto e carta, pagamenti, condivisione, risparmio, investimenti e business.
  `/carta/` resta una pagina prodotto specifica.
- Il runtime prevede Cookiebot e Google Tag Manager con gli ID verificati nel mirror
  (`c7c80695-9545-4ba0-8427-045f3a5c7b68` e `GTM-WT954TT`), sovrascrivibili tramite
  `PUBLIC_COOKIEBOT_ID` e `PUBLIC_GTM_ID`. L’iniezione runtime è limitata all’hostname
  di produzione `tinaba.bancaprofilo.it`: localhost, preview e altri domini non fanno
  richieste a Cookiebot o GTM. I tag restano subordinati al consenso Cookiebot.
- Il build corrente genera 48 pagine HTML, inclusi `/news/`, `/soluzioni/`,
  `/brand-guidelines/`, `/promozioni/scuola/` e `/sitemap.xml`.

## Controlli automatici

- Astro check: passato; 0 errori, 0 warning e 0 hint.
- Build statico: passato; 48 pagine generate, inclusa `/sitemap.xml`, in `dist/`.
- Controllo strutturale A11Y: passato; 48 pagine HTML controllate da
  `npm run check:a11y`.
- Audit SEO/output: passato; title, description, canonical, robots e sitemap presenti
  sulle 48 pagine generate. Verificati anche 1.723 link interni e 5 riferimenti PDF,
  senza destinazioni locali mancanti.
- QA browser responsive: completata su viewport stretto e largo per homepage e pagine
  rappresentative (carta, piani, news, assistenza e brand guidelines); tutte le 47
  route rispondono `200` dal server locale attivo.
- QA tastiera, focus e reduced motion: da eseguire; non registrata nel repository.
- Verifica link esterni: da eseguire; richiede il controllo operativo delle
  destinazioni.
- Deploy: non eseguito; è previsto l’upload manuale di `dist/` su Netlify.

## Decisioni operative

- La pubblicazione prevista è Netlify con upload manuale di `dist/`; non è configurato
  un deploy Git-connected.
- La base canonica corrente della sitemap è `https://tinaba.bancaprofilo.it`.
- Il mirror `httrack/` resta materiale di riferimento e non viene modificato.
- La compatibilità con gli URL legacy non rientra nel rilascio corrente.

Le attività pre-produzione sono raccolte in `docs/release-checklist.md`. Le domande
editoriali e legal sono raccolte in `docs/editorial-legal-questions.md`; la matrice
delle fonti è in `docs/content-inventory.md`.
