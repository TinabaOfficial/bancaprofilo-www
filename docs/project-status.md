# Perimetro e verifiche del progetto

- Sito Astro statico con output in `dist/`.
- Homepage Tinaba e layout editoriale riusabile.
- 44 route editoriali oltre alla homepage, più `/soluzioni/` e `/brand-guidelines/`, per
  47 pagine HTML generate.
- Contenuti strutturati in `src/data/pages.ts`, componenti globali per header e footer,
  sitemap statica e `robots.txt`.
- Route prodotto, pagamenti, condivisione, risparmio, investimenti, piani, business,
  community, chi siamo, assistenza, documenti, accessibilità, privacy e cookie.
- Route Viaggiare per Alipay+, con Tinaba descritta come abilitatore digitale e Banca
  Profilo come soggetto bancario.
- Asset visuali locali selezionati e verificati, loghi locali e quattro documenti PDF
  selezionati dal mirror.
- Hero homepage con un asset di wallet/carta reale, selezionato dal mirror e copiato nel
  source boundary; fascia istituzionale articolata per Banca Profilo, Tinaba e
  trasparenza documentale.
- L’arancione Tinaba è l’unico accento di marca per CTA, focus e segnali di navigazione;
  le aree prodotto non usano più palette concorrenti.
- La voce di navigazione “Soluzioni” porta a `/soluzioni/`, un riepilogo dell’offerta
  per conto e carta, pagamenti, condivisione, risparmio, investimenti e business.
  `/carta/` resta una pagina prodotto specifica.
- Nessun tracking, analytics, pixel, advertising, profiling, cookie non necessari, font
  remoti o embed di terze parti nel runtime previsto.
- Il build corrente genera 47 pagine HTML, inclusi `/news/`, `/soluzioni/`,
  `/brand-guidelines/` e `/sitemap.xml`.

## Controlli automatici

- Astro check: passato; 0 errori, 0 warning e 0 hint.
- Build statico: passato; 47 pagine generate, inclusa `/sitemap.xml`, in `dist/`.
- Controllo strutturale A11Y: passato; 47 pagine HTML controllate da
  `npm run check:a11y`.
- Audit SEO/output: passato; title, description, canonical, robots e sitemap presenti
  sulle 47 pagine generate. Verificati anche 1.723 link interni e 5 riferimenti PDF,
  senza destinazioni locali mancanti.
- QA browser responsive: da eseguire; non registrata nel repository.
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
