# Tinaba / Banca Profilo

Nuovo sito pubblico di Tinaba, ricostruito con Astro a partire dai contenuti
verificabili del mirror WordPress locale.

## Direzione

Il progetto punta a un design istituzionale, elegante e digitale, con tono diretto e la
promessa editoriale:

> I soldi, come devono funzionare.

## Struttura

- `AGENTS.md` — obiettivi, principi visuali, vincoli e piano di lavoro.
- `httrack/` — mirror WordPress usato come materiale di riferimento; escluso da Git.
- `src/` — codice Astro e contenuti strutturati.
- `src/assets/media/` — asset editoriali locali gestiti da `astro:assets`; i file raster
  vengono ottimizzati durante il build e non sono più copiati direttamente da `public/`.
- `src/data/editorial/` — contenuti editoriali separati per area prodotto, istituzionale
  e assistenza, con tipi e configurazione condivisi.
- `src/components/editorial/` — sezioni specializzate del rendering editoriale, estratte
  dal layout principale per ridurre il monolite e rendere le modifiche più locali.
- `src/styles/extracted/` — fogli CSS separati per componenti, layout e pagine; i file Astro
  mantengono solo l’import del foglio corrispondente.
- `tests/visual/` — test responsive Playwright con snapshot per homepage e pagina
  istituzionale, più controlli di overflow sulle route rappresentative.
- `src/styles/tokens.css` e `src/styles/components.css` — token visuali e primitive CSS
  condivise, importati dalla base globale.

Il sito pubblico è implementato con Astro e genera un output statico. La homepage, le
pagine prodotto e istituzionali, la sezione news, `/soluzioni/`, `/brand-guidelines/`,
`robots.txt` e `sitemap.xml` fanno parte del progetto corrente.

La matrice delle fonti, delle route e dei claim sensibili è in
`docs/content-inventory.md`. Le domande editoriali e legal sono in
`docs/editorial-legal-questions.md`; la checklist per la pubblicazione è in
`docs/release-checklist.md`.

## Consegna

- Astro produce output statico in `dist/`.
- Il progetto richiede Node 20.19+ e npm 10+; le versioni devono essere rispettate anche
  nella pipeline CI.
- Il deploy previsto è Netlify con upload manuale della directory `dist/`; non è
  configurato un deploy Git-connected né un comando di build remoto.
- La sitemap usa `https://tinaba.bancaprofilo.it` come base canonica, da sostituire se
  il dominio pubblico definitivo sarà diverso.
- La compatibilità con i vecchi URL non rientra nell’attuale rilascio.

## Verifica locale

```text
npm run check
npm run build
npm run validate:output
npm run check:a11y
npm run audit:assets
npm run test:visual
```

Il comando `npm run validate` esegue l’intera sequenza in modo ripetibile.

`audit:assets` controlla gli asset sorgente non referenziati e i duplicati per hash.
`test:visual` avvia il server Astro e verifica snapshot responsive, immagini responsive
e overflow orizzontale sui percorsi principali.

`check:a11y` controlla tutte le pagine HTML generate per lingua, titolo, description,
landmark principale, skip link, `h1`, alt text, link nominati e gerarchia dei titoli. La
verifica automatica non sostituisce il controllo operativo delle destinazioni esterne,
la QA browser responsive e la prova da tastiera.

La verifica automatica deve essere integrata con la checklist pre-produzione in
`docs/release-checklist.md`. La QA visuale browser, la verifica completa dei link
esterni e il deploy non sono inclusi nei comandi locali.

## Principi

- output statico Astro;
- il runtime è privo di richieste Cookiebot/GTM per impostazione predefinita; i servizi
  vengono abilitati solo con `PUBLIC_CONSENT_ENABLED=true`, ID configurati e consenso
  approvato sul dominio di produzione;
- accessibilità WCAG 2.2 AA come baseline;
- contenuti finanziari, legali e regolamentari verificati prima della pubblicazione;
- asset e font locali quando possibile.

## Confini del progetto

- `src/` contiene pagine, componenti, layout e dati editoriali Astro.
- `public/` contiene asset runtime, documenti PDF, favicon e file tecnici statici.
- `dist/` è l’output generato e non è il sorgente editoriale.
- `httrack/` è il mirror di riferimento e resta escluso dal porting e dalle modifiche.
- Il sito non contiene backend, account, checkout o onboarding simulati.
- Il deploy previsto è un upload manuale di `dist/` su Netlify; nessun deploy è stato
  eseguito.

## Documentazione

- `AGENTS.md` — principi architetturali, visuali, editoriali e regole di lavoro.
- `docs/content-inventory.md` — fonti del mirror, matrice route/contenuti e confini del
  porting.
- `docs/project-status.md` — perimetro implementato e verifiche automatiche richieste.
- `docs/editorial-legal-questions.md` — approvazioni e decisioni ancora necessarie prima
  della pubblicazione.
- `docs/release-checklist.md` — controllo unico pre-produzione e criteri di chiusura.
