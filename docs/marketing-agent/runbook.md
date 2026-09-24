# Agente editoriale AI — pilota on-demand

## Scopo e modalità

Questo runbook descrive il flusso in cui i colleghi del marketing usano Codex sul
proprio computer, con il repository locale aperto. Descrivono direttamente il lavoro
all'agente e verificano il risultato nella preview locale.

Per confrontare il processo WordPress e accompagnare il passaggio al nuovo flusso,
seguire la [checklist di migrazione](migration-checklist.md).

Il pilota usa un solo agente con fasi distinte di triage, redazione, controllo e
consegna. Non sono agenti autonomi separati.

## Ambito iniziale

L'agente può lavorare su news, contenuti editoriali e promozioni quando le fonti,
le date e le condizioni necessarie sono fornite e approvate. Può modificare i dati
editoriali e gli asset esplicitamente autorizzati dal programmatore.

Non può modificare layout, componenti, stili, configurazioni, destinazioni operative,
workflow o documenti legali. Non può inventare prezzi, rendimenti, condizioni,
disponibilità, dati regolamentari, basi giuridiche o claim. Se una richiesta esce
dall'ambito, mancano fonti o i dati sono ambigui, chiede chiarimenti nel thread Codex.

## Procedura di esecuzione

1. Leggere il brief fornito dal collega e verificare se specifica il contenuto,
   le fonti e il risultato desiderato.
2. Classificare la richiesta come editoriale ordinaria
   oppure sensibile (economica, finanziaria, legale o regolamentare).
3. Interpretare la descrizione libera e verificare fonti, date, destinazione e asset.
   Chiedere chiarimenti solo quando manca un elemento necessario o la richiesta è
   ambigua.
4. Modificare solo i file editoriali autorizzati. Conservare i contenuti preesistenti
   non interessati dalla richiesta.
5. Eseguire i controlli di progetto appropriati e avviare la preview locale con
   l'azione configurata per `npm run dev`. La preview locale non è produzione.
6. Riepilogare nel thread Codex il brief, i file modificati, i controlli eseguiti e
   l'esito della preview.
7. Su richiesta, creare un branch, fare commit e push, quindi aprire una pull request
   con il brief e il riepilogo per la revisione.

Se build, preview o controlli falliscono, non dichiarare il lavoro pronto: descrivere
l'errore concretamente nel riepilogo Codex.

## Produzione e approvazioni

Una richiesta di pubblicazione in produzione non è un'autorizzazione sufficiente.
Il pilota prepara il rilascio, ma non esegue deploy di produzione. L'approvatore
autorizzato e il meccanismo di produzione devono essere definiti prima di abilitare
quel passaggio.

Prezzi, tassi, rendimenti, commissioni, limiti, promozioni, claim finanziari,
informazioni legali e regolamentari richiedono approvazione esplicita della funzione
responsabile anche quando le fonti sono allegate.

## Limiti del pilota

- Ogni collega deve avere Git, Node e le dipendenze configurate sul proprio computer.
- La preview con `npm run dev` è locale e non è visibile agli altri colleghi.
- Non è ancora definito un processo di produzione automatizzato.
- Il workflow GitHub Pages è una preview distinta: va eseguito e verificato prima di
  considerarlo operativo o condividerlo come preview remota.
