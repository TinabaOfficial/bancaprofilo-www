# Tinaba / Banca Profilo

Nuovo sito pubblico di Tinaba, ricostruito con Astro a partire dai contenuti verificabili del mirror WordPress locale.

## Direzione

Il progetto punta a un design istituzionale, elegante e digitale, con tono diretto e la promessa editoriale:

> I soldi, come devono funzionare.

## Struttura

- `AGENTS.md` — obiettivi, principi visuali, vincoli e piano di lavoro.
- `httrack/` — mirror WordPress usato come materiale di riferimento; escluso da Git.
- `src/` — codice Astro e contenuti strutturati.

## Stato al 18 settembre 2026

La homepage verticale e il template editoriale sono implementati. Il progetto genera 45 pagine HTML statiche, compresa la homepage, con route prodotto, istituzionali, community, assistenza e documenti. Sono inclusi Alipay+ nella sezione Viaggiare, `robots.txt`, `sitemap.xml`, tre asset visuali verificati e quattro PDF selezionati dal mirror.

La matrice delle fonti, delle route e dei claim sensibili è in `docs/content-inventory.md`. Le decisioni ancora necessarie prima della pubblicazione sono in `docs/editorial-legal-questions.md`; il quadro sintetico è in `docs/project-status.md`.

## Consegna

- Astro produce output statico in `dist/`.
- Il deploy previsto è Netlify con upload manuale della directory `dist/`; non è configurato un deploy Git-connected né un comando di build remoto.
- La sitemap usa `https://tinaba.bancaprofilo.it` come base canonica, da sostituire se il dominio pubblico definitivo sarà diverso.
- La compatibilità con i vecchi URL non rientra nell’attuale rilascio.

## Verifica locale

```text
npm run check
npm run build
npm run check:a11y
```

`check:a11y` controlla tutte le pagine HTML generate per lingua, titolo, description, landmark principale, skip link, `h1`, alt text, link nominati e gerarchia dei titoli. La verifica finale comprende anche controllo delle route generate, dei link locali, dei metadata, dell’assenza di script/font/embed remoti nel source e nell’output, oltre a QA browser responsive e tastiera.

Risultati verificati il 18 settembre 2026: `npm run check` passa con 0 errori, 0 warning e 0 hint; `npm run build` passa generando 45 pagine; `npm run check:a11y` passa su 45 pagine HTML. La QA visuale browser, la verifica completa dei link esterni e il deploy non sono inclusi in questi esiti.

## Principi

- output statico Astro;
- nessun tracking o embed di terze parti per impostazione predefinita;
- accessibilità WCAG 2.2 AA come baseline;
- contenuti finanziari, legali e regolamentari verificati prima della pubblicazione;
- asset e font locali quando possibile.
