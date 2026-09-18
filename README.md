# Tinaba / Banca Profilo

Nuovo sito pubblico di Tinaba, ricostruito con Astro a partire dai contenuti verificabili del mirror WordPress locale.

## Direzione

Il progetto punta a un design istituzionale, elegante e digitale, con tono diretto e la promessa editoriale:

> I soldi, come devono funzionare.

## Struttura

- `AGENTS.md` — obiettivi, principi visuali, vincoli e piano di lavoro.
- `httrack/` — mirror WordPress usato come materiale di riferimento; escluso da Git.
- `src/` — codice Astro, da introdurre nelle fasi successive.

## Stato

Il repository contiene attualmente la documentazione iniziale e il mirror locale. L’implementazione Astro partirà dall’inventario di contenuti, asset e route descritto in `AGENTS.md`.

## Principi

- output statico Astro;
- nessun tracking o embed di terze parti per impostazione predefinita;
- accessibilità WCAG 2.2 AA come baseline;
- contenuti finanziari, legali e regolamentari verificati prima della pubblicazione;
- asset e font locali quando possibile.
