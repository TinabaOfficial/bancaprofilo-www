# Stato del progetto

Aggiornato: 18 settembre 2026

## Implementato

- Sito Astro statico con output in `dist/`.
- Homepage Tinaba e layout editoriale riusabile.
- 44 route editoriali oltre alla homepage, per 45 pagine HTML generate.
- Contenuti strutturati in `src/data/pages.ts`, componenti globali per header e footer, sitemap statica e `robots.txt`.
- Route prodotto, pagamenti, condivisione, risparmio, investimenti, piani, business, community, chi siamo, assistenza, documenti, accessibilità, privacy e cookie.
- Route Viaggiare per Alipay+, con Tinaba descritta come abilitatore digitale e Banca Profilo come soggetto bancario.
- Tre asset visuali verificati, loghi locali e quattro documenti PDF selezionati dal mirror.
- Nessun tracking, analytics, pixel, advertising, profiling, cookie non necessari, font remoti o embed di terze parti nel runtime previsto.

## Verificato

| Controllo | Esito | Evidenza |
|---|---|---|
| Astro check | Passato | 0 errori, 0 warning, 0 hint |
| Build statico | Passato | 45 pagine generate, inclusa `/sitemap.xml` |
| Controllo strutturale A11Y | Passato | 45 pagine HTML controllate da `npm run check:a11y` |
| QA browser responsive | Da eseguire | Non registrata nel repository |
| QA tastiera/focus/reduced motion | Da eseguire | Non registrata nel repository |
| Verifica link esterni | Da eseguire | Richiede controllo operativo delle destinazioni |
| Deploy | Non eseguito | Previsto upload manuale di `dist/` su Netlify |

## Decisioni già fissate

- La pubblicazione prevista è Netlify con upload manuale di `dist/`; non è configurato un deploy Git-connected.
- La base canonica corrente della sitemap è `https://tinaba.bancaprofilo.it`.
- Il mirror `httrack/` resta materiale di riferimento e non viene modificato.
- La compatibilità con gli URL legacy non rientra nel rilascio corrente.

## Da chiudere prima della pubblicazione

- Approvazione finale di headline, sottotitoli, promozioni, condizioni economiche, claim finanziari e disclaimer.
- Conferma di titolarità, recapiti, ruoli istituzionali, documenti legali e versioni pubblicabili.
- Conferma delle destinazioni operative per onboarding, assistenza, business e partnership.
- Decisione su redirect/compatibilità degli URL legacy, area stampa e form ambassador.
- QA browser e accessibilità manuale su viewport stretti e larghi.

Per il dettaglio delle domande e delle evidenze richieste, consultare `docs/editorial-legal-questions.md` e `docs/content-inventory.md`.
