# Checklist pre-produzione

Questa è la checklist unica da chiudere prima della pubblicazione. Un elemento è
completato solo quando esiste un’evidenza verificabile o un’approvazione esplicita.

## Contenuti e approvazioni

- [ ] Headline, sottotitoli, CTA e tono della homepage sono approvati.
- [x] Prezzi, tassi, rendimenti, bonus, cashback, soglie, limiti, paesi e date di
      validità sono verificati.
- [ ] Disclaimer, documenti regolamentari e condizioni economiche pubblicati sono
      approvati e aggiornati.
- [ ] Promozioni attive, archivio e regolamenti scaduti sono distinti correttamente.
- [ ] Ruoli di Tinaba e Banca Profilo, denominazione societaria e recapiti istituzionali
      sono confermati.
- [ ] Diritti, alt text e natura decorativa/informativa degli asset sono verificati.

## Destinazioni e funzionalità

- [x] Le destinazioni di `Apri il conto`, `Accedi`, onboarding privati/business e
      assistenza sono confermate.
- [ ] Link a partnership e servizi esterni, inclusi Apple Pay, Google Pay, American
      Express, Alipay+, Gift Card e WISHOPe, sono verificati.
- [ ] Non esistono form, account, checkout o onboarding simulati senza endpoint
      approvato.
- [ ] La scelta su URL legacy e redirect è documentata.

## Privacy, accessibilità e sicurezza

- [ ] Privacy e cookie policy descrivono il runtime effettivo del sito.
- [ ] Cookiebot è configurato sul dominio di produzione con categorie, fornitori,
      finalità, durate e dichiarazione coerenti con il runtime effettivo.
- [ ] Google Tag Manager usa il container approvato e non attiva analytics, pixel,
      advertising, profiling o altri tag non necessari prima del consenso corrispondente.
- [ ] Il comportamento del consenso è verificato in tutti gli stati: nessuna scelta,
      rifiuto, accettazione selettiva, accettazione completa e revoca successiva.
- [ ] Le richieste di rete, i cookie, il local storage e i tag attivati sono controllati
      prima e dopo ogni scelta; non restano servizi o embed di terze parti non approvati.
- [ ] La pagina Cookie, la dichiarazione Cookiebot e la configurazione GTM sono
      sincronizzate e riportano le stesse categorie e finalità.
- [ ] La QA da tastiera copre skip link, menu, focus, link, immagini e documenti.
- [x] La QA responsive copre viewport stretto e largo su homepage e pagine
      rappresentative: carta, piani, news, assistenza e brand guidelines.
- [ ] `prefers-reduced-motion`, contrasto, reflow e titoli sono verificati in browser.
- [ ] PDF, recapiti per assistenza/reclami/accessibilità e documenti pubblicati sono
      verificati.

## Build e pubblicazione

- [x] `npm run check` passa senza errori, warning o hint.
- [x] `npm run build` genera l’output statico completo in `dist/`.
- [x] `npm run check:a11y` controlla tutte le pagine HTML generate.
- [x] Route, metadata, link locali, immagini, favicon, `robots.txt` e `sitemap.xml` sono
      controllati nell’output. L’audit corrente copre 47 pagine, i documenti PDF
      pubblicati e nessun link locale mancante.
- [ ] Il dominio canonico della sitemap è confermato.
- [ ] La procedura di upload manuale su Netlify è confermata e il deploy viene
      registrato separatamente dalla build locale.
