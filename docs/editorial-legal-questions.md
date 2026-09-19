# Questioni editoriali e legal da chiudere

Queste domande bloccano la pubblicazione dei contenuti sensibili, non la costruzione
tecnica della shell Astro.

## Approvazioni necessarie

1. Qual è la versione approvata della homepage e quali promozioni del mirror sono ancora
   attive al momento del rilascio?
2. La promessa `I soldi, come devono funzionare.` è approvata come headline pubblica?
   Quale sottotitolo concreto la accompagna?
3. Quali destinazioni operative sono autorizzate per `Apri il conto`, `Accedi`,
   onboarding privati e business? Il mirror contiene sia `onboarding.tinaba.it` sia
   `onboarding.bancaprofilo.it`.
4. Quali loghi, fotografie, illustrazioni e screenshot hanno diritti riutilizzabili nel
   nuovo sito? Per ogni immagine servono alt text approvato e indicazione
   decorativo/informativo.
5. Quale denominazione societaria, ruolo di Banca Profilo e testo di fiducia
   istituzionale devono essere mostrati nella homepage e nel footer?

## Prodotti e claim finanziari

1. Confermare prezzi, tassi, rendimenti, bonus, cashback, soglie, limiti, paesi serviti
   e date di validità per conto, piani, deposito, investimenti e cripto.
2. Fornire disclaimer e documenti approvati per conto deposito, roboadvisor, conto
   titoli e cripto; nessun rendimento o beneficio va presentato come garantito.
3. Separare promozioni attive, archivio e regolamenti scaduti; definire la politica di
   rimozione o indicizzazione.
4. Confermare disponibilità effettiva di Apple Pay, Google Pay, American Express,
   Alipay+, Gift Card, WISHOPe e pagamenti mondiali.

## Privacy, accessibilità e contatti

1. Qual è il titolare del trattamento, quali finalità/basi giuridiche/conservazioni e
   quali responsabili devono comparire nella privacy del nuovo runtime statico?
2. Il nuovo sito resterà senza analytics, pixel, advertising, profiling e cookie non
   necessari? In tal caso la pagina cookie deve riflettere esattamente questa scelta.
3. Quali recapiti ufficiali usare per assistenza, reclami, disconoscimenti,
   accessibilità, stampa e whistleblowing?
4. Il nuovo sito deve pubblicare solo documenti PDF approvati e aggiornati? Servono
   data/versione e regola per gli archivi.
5. È autorizzato un form ambassador statico solo come link esterno, oppure esiste un
   endpoint/backend approvato? Non verrà simulato un invio locale.

## Deploy e compatibilità

1. Il target previsto è Netlify con upload manuale della directory `dist/`. Confermare
   il titolare operativo dell’account e la procedura di pubblicazione.
2. È necessario conservare URL legacy e redirect? Il rilascio corrente non li
   implementa; servono elenco prioritario e destinazioni canoniche se diventano
   requisito.
3. La base canonica corrente della sitemap è `https://tinaba.bancaprofilo.it`.
   Confermare il dominio pubblico definitivo prima del rilascio.
4. Il progetto usa npm con `package-lock.json`; confermare se serve una pipeline CI e
   quali controlli deve eseguire.

## Verifiche tecniche ancora da eseguire

1. QA browser responsive della homepage e di campioni rappresentativi.
2. Prova da tastiera di skip link, menu, focus, link e documenti; controllo
   `prefers-reduced-motion`.
3. Verifica operativa delle destinazioni esterne e dei PDF pubblicati.
4. Controllo finale del contenuto generato dopo la sostituzione dell’eventuale dominio
   canonico.
