# PFM e AI — piano di portabilità e definizione prodotto

## Obiettivo

Rendere visibile sul nuovo sito il posizionamento di Tinaba nell’uso responsabile dell’intelligenza artificiale per la gestione del denaro, senza presentare come disponibile una funzionalità PFM che il sito originale non descrive ancora in modo verificabile.

Il risultato distingue due filoni:

1. **AI negli investimenti**, già documentata sul sito originale come parte del Roboadvisor di Banca Profilo e della piattaforma Sphere di MDOTM.
2. **PFM AI**, annunciata sul sito originale ma non ancora specificata con funzioni, interfaccia, disponibilità o condizioni sufficienti per una pagina prodotto.

## Evidenze disponibili

### Materiale portabile subito

- `httrack/bancaprofilo-www/tinaba.bancaprofilo.it/investimenti.html` contiene la sezione “Tecnologia AI per i tuoi investimenti”.
- Il sito originale descrive Sphere come supporto all’analisi dei mercati, all’ottimizzazione e al ribilanciamento; precisa inoltre che le proposte vengono valutate e validate dal team investimenti di Banca Profilo.
- `src/data/editorial/products.ts` contiene già la pagina `/investimenti/` e un primo testo dedicato ai portafogli dinamici.
- `src/data/news.ts` e la homepage hanno già un richiamo all’integrazione di Sphere.

### Materiale non sufficiente per una pagina PFM

- La homepage originale contiene soltanto un annuncio: “l’AI che ti aiuta a gestire al meglio le tue finanze”.
- Non risultano, nel mirror, una pagina PFM dedicata, una lista di funzioni, schermate del prodotto, data di disponibilità, canali di accesso o documenti approvati.
- Non è quindi verificabile se si tratti di categorizzazione delle spese, analisi dei flussi, suggerimenti di budget, obiettivi di risparmio, assistente conversazionale o altro.

## Decisione di prodotto

### Da fare nel sito Astro adesso

1. Consolidare la pagina `/investimenti/` con una sezione AI precisa e sobria: “Tecnologia AI nel processo di investimento”.
2. Esplicitare sempre il ruolo di Banca Profilo: l’AI supporta il processo, mentre le proposte sono valutate e validate dal team investimenti di Banca Profilo.
3. Collegare la sezione alla documentazione e al blog/guida investimenti già approvati.
4. Mantenere nella news il richiamo a Sphere, senza trasformarlo in una promessa di rendimento o di risultato finanziario.
5. Aggiungere nella homepage un richiamo PFM solo come “in arrivo” o come area da approfondire, esclusivamente se il team prodotto approva il claim.

### Da non fare ancora

- Non creare una pagina `/pfm-ai/` che descriva funzioni non presenti nel mirror.
- Non simulare dashboard, chat, classificazioni o consigli finanziari nel sito statico.
- Non chiamare l’AI un consulente, né attribuirle autonomia decisionale.
- Non usare claim come “ottimizza le tue finanze”, “trova sempre il modo migliore” o “aumenta i tuoi risparmi” senza evidenza e approvazione.

## Piano in tre fasi

### Fase 1 — Portabilità editoriale dell’AI investimenti

**Output:** aggiornamento focalizzato di `/investimenti/`, homepage e news.

- Verificare il testo approvato, il nome Sphere, il ruolo di MDOTM e il ruolo del team investimenti di Banca Profilo.
- Separare chiaramente AI, Roboadvisor, portafogli ETF, PAC e modalità Parking.
- Inserire un box “Come funziona” con tre passaggi: analisi e supporto, valutazione umana, applicazione nella gestione.
- Aggiungere disclaimer su rischio, rendimento non garantito e documentazione vigente.
- Verificare asset e alt text della sezione, responsive layout, link e contrasto.

**Criterio di accettazione:** ogni frase sulla tecnologia AI è riconducibile al testo originale o a un testo approvato; nessuna frase implica consulenza automatica o rendimento garantito.

### Fase 2 — Discovery PFM AI

**Output:** scheda prodotto approvata prima di implementare la pagina.

Da ottenere dal team prodotto, compliance, privacy e tecnologia:

- nome ufficiale e stato del servizio;
- utenti destinatari e disponibilità: tutti, solo clienti, piano specifico o beta;
- funzioni effettive: categorizzazione, insight, budget, obiettivi, previsione, notifiche, assistente o altro;
- fonti dati utilizzate e periodo storico analizzato;
- livello di personalizzazione e possibilità di correzione da parte dell’utente;
- distinzione tra informazione, educazione finanziaria e raccomandazione personale;
- ruolo dell’AI e ruolo umano, inclusi controlli e gestione degli errori;
- dati trattati, basi giuridiche, conservazione, fornitori e trasferimenti;
- canale di accesso, screenshot approvati, CTA e data di rilascio;
- copy approvato, disclaimer e documentazione contrattuale/di privacy.

**Criterio di uscita:** esiste una matrice “funzione → evidenza → claim approvato → schermata → link operativo”. Se una riga manca, la funzione non entra nella pagina pubblica come capacità disponibile.

### Fase 3 — Pagina e lancio PFM AI

**Output:** pagina editoriale pubblica e, se approvato, richiamo coerente nella homepage e nell’area risparmio.

- Presentare il problema dell’utente prima della tecnologia.
- Mostrare esempi verificabili di lettura delle spese e consapevolezza, non promesse di controllo automatico del denaro.
- Dichiarare limiti, possibilità di errore, correzione manuale e natura non sostitutiva della consulenza finanziaria, se applicabile.
- Usare asset reali dell’app oppure mockup esplicitamente identificati come illustrazioni.
- Collegare privacy, sicurezza, assistenza e documenti ufficiali.
- Validare con QA browser, tastiera, reduced motion, controllo no-tracking e revisione compliance prima della pubblicazione.

## User stories e criteri di accettazione

### AI negli investimenti

**Come persona interessata a investire**, voglio capire che cosa fa l’AI nel Roboadvisor, così posso distinguere il supporto tecnologico dalle decisioni validate da Banca Profilo.

- La pagina nomina Banca Profilo come soggetto del servizio di investimento.
- La pagina descrive analisi, ottimizzazione e ribilanciamento come supporto al processo.
- È esplicita la validazione del team investimenti.
- Sono presenti rischio, costi e documenti applicabili, senza promessa di rendimento.

### PFM AI — futuro

**Come cliente Tinaba**, voglio sapere quali dati e funzioni usa l’AI per aiutarmi a leggere le mie finanze, così posso decidere consapevolmente se usarla.

- La pagina pubblica solo funzioni effettivamente disponibili.
- Ogni funzione indica fonte dati, limite noto e possibilità di correzione, quando rilevante.
- Privacy e trattamento dati sono collegati a documenti aggiornati.
- L’AI non esegue operazioni finanziarie senza un’azione esplicita e verificabile dell’utente.

## Questioni bloccanti per il PFM

1. Il servizio PFM AI esiste già in produzione o è soltanto roadmap?
2. Qual è il nome ufficiale del prodotto e qual è la data/condizione di disponibilità?
3. Quali sono le prime tre funzioni che possiamo dimostrare con schermate approvate?
4. Analizza solo dati Tinaba o anche conti esterni tramite open banking?
5. Produce suggerimenti personalizzati? Se sì, come vengono classificati e supervisionati?
6. Quali informative privacy, consensi e fornitori AI sono applicabili?

## Priorità proposta

1. **P0:** consolidare AI investimenti nella pagina già esistente.
2. **P0:** ottenere la scheda prodotto PFM e il via libera compliance/privacy.
3. **P1:** preparare wireframe e copy PFM senza pubblicazione.
4. **P1:** pubblicare la pagina solo con funzioni e asset verificati.
5. **P2:** integrare FAQ, educazione finanziaria e misurazione editoriale senza tracking non approvato.

## Fonti di lavoro

- Mirror locale: `httrack/bancaprofilo-www/tinaba.bancaprofilo.it/index.html`.
- Mirror locale: `httrack/bancaprofilo-www/tinaba.bancaprofilo.it/investimenti.html`.
- Implementazione attuale: `src/data/editorial/products.ts` e `src/data/news.ts`.
- Pagina originale Roboadvisor: <https://tinaba.bancaprofilo.it/investimenti>.

