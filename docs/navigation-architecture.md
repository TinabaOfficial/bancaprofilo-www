# Menu e footer — architettura del 23 ottobre 2026

La struttura segue gli schemi approvati nella chat. I testi delle pagine prodotto,
istituzionali e legali e i relativi moduli in `src/data/editorial/` non sono riscritti.
Le etichette di navigazione possono differire dai titoli delle pagine (per esempio
Profili/Piani e Minorenni/Under 18).
Il breadcrumb di `/piani/` è “Home › Privati › Confronta i profili”. Start,
Premium e Minorenni sono pagine sorelle del confronto sotto Privati, coerentemente
con il raggruppamento Profili del menu.
La pagina `/business/` usa “Business” come voce corrente del breadcrumb,
coerentemente con l’etichetta del menu, anziché “Conto Business”.

## Menu principale

La configurazione condivisa desktop/mobile è in `src/data/navigation.ts`.
Ogni voce principale apre un pannello nativo `details`; i pannelli funzionano anche
senza JavaScript. Il miglioramento JavaScript chiude gli altri pannelli, gestisce Esc,
il clic esterno e la selezione di un collegamento. Le voci senza destinazione sono
testo esplicativo, senza link fittizi.

| Voce | Destinazione o raggruppamento |
| --- | --- |
| Privati → Tutto per i privati | `/privati/`, nuovo indice di collegamenti |
| Profili | Start, Premium, Minorenni e confronto nelle route `/piani/` esistenti |
| Conto e carta | `/wallet/`, `/carta/`, `/pagamenti/american-express/` |
| Pagamenti | `/pagamenti/trasferimenti/`, `/pagamenti/alipay-plus/`; Gift Card confluirà in Pagare e trasferire denaro |
| Risparmi | `/risparmio/`, Conto Deposito e Salvadanaio |
| Investimenti | `/investimenti/`, RoboAdvisor, Conto Titoli e Cripto |
| Spese Condivise → Gruppi e raccolte | `/condivisione/`, con accesso ai due percorsi esistenti |
| Più valore per te | fascia evidenziata con link diretti a `/promozioni/`, `/promozioni/scuola/`, `/privati/vantaggi/` e Valore Mese non cliccabile |
| Business → Tutto per il tuo business | `/business/panoramica/`, nuovo indice |
| Business → Business | `/business/`, con il blocco E-commerce riutilizzato integralmente |
| Business → Servizi per Community | `/community/` |
| Chi Siamo → Tinaba di Banca Profilo | `/chi-siamo/` |
| Identità e valori | sezione di `/chi-siamo/#identita-e-valori`, senza voce autonoma |
| Il nostro impegno | `/chi-siamo/impegno/`, nuovo indice |
| Educazione finanziaria | `/chi-siamo/educazione-finanziaria/`, sotto Il nostro impegno |
| Charity e iniziative solidali; WISHOPe | rispettive pagine `/community/charity/` e `/community/wishope/` |
| Partnership | `/chi-siamo/partnership/`, indice dei collegamenti già presenti nel progetto |
| Partnership → Partner tecnologici | `/chi-siamo/partnership/partner-tecnologici/` |
| Partnership → Partner commerciali e di servizio | `/chi-siamo/partnership/partner-commerciali-e-di-servizio/` |
| Area stampa | `/stampa/` |
| Assistenza → FAQ | `/assistenza/#faq` |
| Assistenza → Contattaci | `/assistenza/#contatti` |

Gli indici aggiunti contengono solo titoli ed elenchi di collegamenti. Il layout è
`NavigationPageLayout.astro`; sono generati dal catch-all Astro e inclusi nella sitemap.
Le due nuove pagine Partnership hanno per ora titolo e breadcrumb: contenuti e
assegnazione dei partner alle categorie restano da definire. Gli approfondimenti
già presenti restano nell’indice Partnership. Dopo questa aggiunta la build genera
55 pagine di contenuto, inclusa Educazione finanziaria, e due redirect, per
57 file HTML verificati.

I collegamenti diretti e le panoramiche utili hanno sottolineatura sottile
al passaggio del puntatore e al focus da tastiera, con freccia decorativa subito
dopo il nome. Le intestazioni che duplicano le destinazioni
delle sottovoci restano semplici raggruppamenti. Identità e valori è accorpata
alla pagina Tinaba di Banca Profilo, con i testi esistenti e un redirect della
vecchia URL. Educazione finanziaria ha una pagina dedicata con il testo già
presente e breadcrumb “Home › Chi Siamo › Il nostro impegno › Educazione
finanziaria”. La vecchia ancora in Chi Siamo resta valida.
Pagamenti è un titolo di raggruppamento senza collegamento né freccia.
Anche Business e Servizi per Community sono titoli di sezione non cliccabili:
ciascuno contiene il collegamento alla pagina omonima, rispettivamente
`/business/` e `/community/`, su desktop, mobile e nella panoramica Business.
Tinaba di Banca Profilo e Area stampa in Chi Siamo, e FAQ e Contattaci in
Assistenza, seguono lo stesso schema: titolo non cliccabile senza freccia e
collegamento alla pagina o sezione omonima sotto il titolo.
Nel footer Manuale d’uso, PSD2 e Whistleblowing mantengono la destinazione
esterna senza indicatore a freccia.
`/soluzioni/` conserva i contenuti precedenti, compresa la panoramica complessiva.
`/business/e-commerce/` resta raggiungibile: il relativo contenuto è anche reso in
`/business/` dagli stessi dati, senza duplicare o modificare il copy sorgente.

## Footer ed elementi condivisi

Quattro gruppi: Assistenza, Sicurezza, Trasparenza, Privacy e cookie. Le due informative
privacy sono i PDF locali già pubblicati. Trasparenza porta alla sezione esistente
dei documenti. PSD2 e Whistleblowing conservano le destinazioni approvate.

Il Manuale d’uso collega la pagina ufficiale rilevata in
`httrack/bancaprofilo-www/tinaba.bancaprofilo.it/manuale-d-uso.html`;
la destinazione è centralizzata in `site.config.mjs`. Non vengono importati i suoi
contenuti o script. La verifica HTTP automatica del 23 ottobre restituisce **403**:
l’apertura sul sito ufficiale richiede una verifica manuale, non è dichiarata superata.

Area riservata collega l’Home Banking (`homeBanking`), mantenendo la destinazione
del precedente Accedi. Accedi è rimosso dall’header desktop e dal menu mobile.
La precedente destinazione Dashboard Business resta in configurazione ma non è
usata per il collegamento Area riservata. Nessun accesso o flusso operativo è simulato.

Nel pannello Privati le sei categorie sono disposte in tre colonne; “Più valore per te”
è una fascia separata con bordo arancione e titolo “Valore per ciò che conta.”.
I collegamenti sono visibili direttamente nella fascia, con Tutte le promozioni come
richiamo principale. La pagina intermedia `/privati/iniziative/` è stata rimossa dalla
generazione prima della pubblicazione, su richiesta dell’utente. Il test browser
verifica l’apertura diretta di Valore Scuola sia da desktop sia da mobile.

I download dell’App sono in basso a destra, con il titolo “Scarica l’App”, sopra
i cinque canali social ufficiali. La fascia centrale “Trasparenza — Una banca.
Una piattaforma digitale.” è rimossa. Il testo esistente sui ruoli è mantenuto
in forma compatta accanto al logo e ai dati societari; la colonna dei documenti
Trasparenza resta disponibile.
I link Banca Profilo, News, linee guida del brand e Investiamo sono rimossi dalla fascia
inferiore. `/brand-guidelines/` resta pubblica e invariata, accessibile dalla URL
diretta e dalla sitemap. Anche la pagina Banca Profilo rimane disponibile.
News non è più generata né elencata nella sitemap. È conservata in `archive/news/`
con sorgente Astro, modulo dati (40 schede), CSS e manifest SHA-256. I collegamenti
alla pagina rimossa sono eliminati; quelli generici alle iniziative nella Community
portano alle promozioni. Non viene importato o collegato un Blog sostitutivo.
Header, footer e fascia sono condivisi anche dalle pagine indice e dalla pagina 404.

## Consenso e voce in attesa

- **Valore Mese:** l’utente ha confermato che la pagina non esiste ancora. La voce è
  in grassetto senza sottotitoli di indisponibilità e non è cliccabile. Non esiste
  una nuova route SDD.
- **Impostazioni cookie:** il collegamento usa `Cookiebot.renew()` solo se disponibile;
  altrimenti apre `/cookie/#preferenze`, senza simulare un salvataggio del consenso.
  Nessun nuovo fornitore, cookie o script remoto è attivato da questa modifica.
- La QA del consenso effettivo in produzione resta separata dai test del collegamento.

## Breadcrumb

Le 52 pagine interne, compresa la 404, mostrano il percorso di navigazione;
la homepage ne è esclusa. La gerarchia segue le categorie del menu anche quando
differiscono dai segmenti URL. Il componente condiviso usa link ai livelli
precedenti e testo con `aria-current="page"` per la pagina corrente.
I percorsi vanno a capo su mobile e i link hanno un’altezza minima di 44px.

`tests/visual/breadcrumbs.spec.ts` controlla presenza, gerarchia, destinazioni
interne, tastiera e reflow a 1440, 390 e 320px. Il contrasto misurato su sei
campioni chiari/scuri supera AA (rapporto minimo 6,98:1); questa verifica non
costituisce una certificazione completa di accessibilità.

## Verifiche

`tests/visual/navigation.spec.ts` copre menu da tastiera a 1440, 768, 390 e 320px,
Esc e focus, collegamenti interni dell’header/footer e relativi ancoraggi, gruppi
del footer, store/social, fallback delle preferenze e integrazione E-commerce.
Il caso Cookiebot usa un oggetto di test: non certifica la configurazione reale.

La QA visuale locale riguarda menu e footer ai quattro viewport. Le catture diagnostiche
sono in `outputs/navigation-qa/`, fuori dal runtime. È stato rilevato anche un overflow
preesistente nelle decorazioni del hero e nella card Premium della homepage a viewport
stretti: non appartiene a menu/footer e non è stato modificato in questo intervento.

Il primo tentativo di build nella sandbox ha restituito `spawn EPERM`; il retry
autorizzato è riuscito. Verifiche finali:

- `npm run check`: 0 errori, warning e hint.
- `npm run build`: 53 pagine di contenuto, oltre al redirect statico legacy.
- `npm run validate:output`: 54 file HTML controllati, nessun riferimento locale mancante.
- `npm run check:a11y`: struttura verificata su 53 pagine e sul redirect.
- `npm run audit:assets`: 61 asset, nessun candidato inutilizzato o duplicato.
- Suite Playwright: 16 test, inclusi 8 test di navigazione, 2 sui breadcrumb e
  gli snapshot delle pagine rappresentative, aggiornati per il nuovo percorso.

Non sono stati eseguiti commit, push o pubblicazione per questo intervento.
