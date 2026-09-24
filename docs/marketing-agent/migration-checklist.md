# Checklist di migrazione del flusso editoriale

## Scopo e attendibilità

Questa checklist confronta il processo WordPress attuale con il flusso proposto basato
su Codex locale, Git e Astro. Il repository documenta il mirror WordPress come fonte
editoriale, ma non descrive ruoli, plugin o passaggi operativi realmente usati dal
marketing. La colonna WordPress è quindi una mappa di confronto da validare, non una
descrizione confermata dell'organizzazione corrente.

Il flusso obiettivo non usa Slack né un journal separato. La conversazione Codex, il diff,
il commit e la pull request costituiscono il record operativo del lavoro.

## Mappatura del processo

- [ ] **1. Richiesta**
  - **WordPress:** verificare come arriva il brief, chi assegna il lavoro e dove sono conservate fonti e approvazioni.
  - **Codex:** il collega descrive liberamente il lavoro nel progetto locale.
  - **Verifica:** provare una richiesta non sensibile e controllare che Codex identifichi obiettivo e pagina.

- [ ] **2. Accesso e ruoli**
  - **WordPress:** verificare account, ruoli effettivi, siti accessibili e chi può pubblicare.
  - **Codex:** ogni collega usa il proprio account GitHub e Codex desktop sul repository.
  - **Verifica:** controllare gli accessi con un account marketing rappresentativo.

- [ ] **3. Ambiente di lavoro**
  - **WordPress:** accesso via browser; verificare editor, plugin e strumenti effettivamente usati.
  - **Codex:** Git, Node e dipendenze installati; repository clonato e versione Node conforme a `package.json`.
  - **Verifica:** seguire una guida di setup su un computer marketing pulito.

- [ ] **4. Redazione**
  - **WordPress:** verificare come si modificano bozze e pagine, come si riusano i modelli e si gestiscono i media.
  - **Codex:** l'agente modifica solo i dati editoriali e gli asset autorizzati.
  - **Verifica:** rivedere il diff e confermare che layout, configurazioni e claim sensibili non siano cambiati senza approvazione.

- [ ] **5. Fonti e asset**
  - **WordPress:** verificare libreria media, provenienza, diritti, alt text e approvazioni.
  - **Codex:** il collega fornisce fonti e asset; l'agente usa asset verificati e non inventa diritti o claim.
  - **Verifica:** confermare fonte, diritti, testo alternativo e approvazione.

- [ ] **6. Revisione editoriale e legale**
  - **WordPress:** verificare revisori, stati di approvazione e categorie soggette a validazione.
  - **Codex:** marketing rivede testo e diff; contenuti economici, finanziari, legali e regolamentari richiedono approvazione della funzione responsabile.
  - **Verifica:** definire approvatore e prova dell'approvazione per ogni categoria sensibile.

- [ ] **7. Anteprima locale**
  - **WordPress:** verificare come si apre l'anteprima e chi può accedervi.
  - **Codex:** il collega avvia `npm run dev` e controlla il sito sul proprio computer.
  - **Verifica:** configurare l'azione Codex per avviare il server e controllare la pagina su desktop e mobile.

- [ ] **8. Controlli**
  - **WordPress:** verificare controlli manuali e plugin usati prima della pubblicazione.
  - **Codex:** eseguire i controlli del progetto e dichiarare chiaramente quelli non eseguiti.
  - **Verifica:** concordare i controlli minimi su contenuto, link e build.

- [ ] **9. Commit e revisione**
  - **WordPress:** verificare lo storico delle revisioni, chi può ripristinare e come.
  - **Codex:** creare branch, commit e pull request; marketing e revisore esaminano il diff secondo le rispettive responsabilità.
  - **Verifica:** provare push e PR senza modificare il branch principale.

- [ ] **10. Preview condivisa**
  - **WordPress:** verificare se esiste uno staging o un link di anteprima condiviso.
  - **Codex:** `npm run dev` è visibile solo in locale; la preview GitHub Pages è un flusso separato.
  - **Verifica:** eseguire il workflow GitHub Pages e controllare URL, contenuti e base path prima di condividerlo.

- [ ] **11. Pubblicazione**
  - **WordPress:** verificare chi pubblica, se la pubblicazione è programmata e quali controlli seguono.
  - **Codex:** la PR non pubblica in produzione; merge e deploy seguono un processo distinto.
  - **Verifica:** definire approvatore, responsabile del merge, trigger e controllo post-pubblicazione.

- [ ] **12. Correzioni e rollback**
  - **WordPress:** verificare correzioni urgenti e ripristino di una revisione precedente.
  - **Codex:** correggere con un nuovo commit/PR e ripristinare con revert Git.
  - **Verifica:** simulare correzione e revert nell'ambiente di preview.

- [ ] **13. Archivio e scadenze**
  - **WordPress:** verificare come si programmano, aggiornano e archiviano news e promozioni scadute.
  - **Codex:** aggiornare contenuti e date, archiviando le promozioni concluse.
  - **Verifica:** controllare un caso scaduto su pagina, card, link e date.
