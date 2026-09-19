# Checklist pre-produzione

Questa è la checklist unica da chiudere prima della pubblicazione. Un elemento è completato solo quando esiste un’evidenza verificabile o un’approvazione esplicita.

## Contenuti e approvazioni

- [ ] Headline, sottotitoli, CTA e tono della homepage sono approvati.
- [ ] Prezzi, tassi, rendimenti, bonus, cashback, soglie, limiti, paesi e date di validità sono verificati.
- [ ] Disclaimer, documenti regolamentari e condizioni economiche pubblicati sono approvati e aggiornati.
- [ ] Promozioni attive, archivio e regolamenti scaduti sono distinti correttamente.
- [ ] Ruoli di Tinaba e Banca Profilo, denominazione societaria e recapiti istituzionali sono confermati.
- [ ] Diritti, alt text e natura decorativa/informativa degli asset sono verificati.

## Destinazioni e funzionalità

- [ ] Le destinazioni di `Apri il conto`, `Accedi`, onboarding privati/business e assistenza sono confermate.
- [ ] Link a partnership e servizi esterni, inclusi Apple Pay, Google Pay, American Express, Alipay+, Gift Card e WISHOPe, sono verificati.
- [ ] Non esistono form, account, checkout o onboarding simulati senza endpoint approvato.
- [ ] La scelta su URL legacy e redirect è documentata.

## Privacy, accessibilità e sicurezza

- [ ] Privacy e cookie policy descrivono il runtime effettivo del sito.
- [ ] Il sito non introduce tracking, analytics, pixel, advertising, profiling, cookie non necessari, font remoti o embed non approvati.
- [ ] La QA da tastiera copre skip link, menu, focus, link, immagini e documenti.
- [ ] La QA responsive copre viewport stretto e largo.
- [ ] `prefers-reduced-motion`, contrasto, reflow e titoli sono verificati in browser.
- [ ] PDF, recapiti per assistenza/reclami/accessibilità e documenti pubblicati sono verificati.

## Build e pubblicazione

- [ ] `npm run check` passa senza errori, warning o hint.
- [ ] `npm run build` genera l’output statico completo in `dist/`.
- [ ] `npm run check:a11y` controlla tutte le pagine HTML generate.
- [ ] Route, metadata, link locali, immagini, favicon, `robots.txt` e `sitemap.xml` sono controllati nell’output.
- [ ] Il dominio canonico della sitemap è confermato.
- [ ] La procedura di upload manuale su Netlify è confermata e il deploy viene registrato separatamente dalla build locale.
