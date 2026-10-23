# Archivio della pagina News

Pagina rimossa dal sito il **23 ottobre 2026**, su richiesta dell’utente.
Questa cartella è materiale di lavoro: non viene copiata in `dist/` né pubblicata.
La pagina non è stata sostituita dal Blog esterno.

Sono conservate copie integrali, verificate con SHA-256 prima della rimozione:

| File archiviato | Percorso originale per il ripristino |
| --- | --- |
| `news.astro.txt` | `src/pages/news.astro` |
| `news.ts.txt` | `src/data/news.ts` |
| `pages_news.css` | `src/styles/extracted/pages_news.css` |

`manifest.json` registra i percorsi e gli hash delle copie. Il modulo dati mantiene
tutte le **40 schede** dell’archivio editoriale, comprese le iniziative concluse.
Le immagini restano negli asset del progetto, dove sono usate anche da altre pagine.
Il mirror WordPress originale non è stato modificato.

Per ripristinare la pagina, copiare i tre file nei rispettivi percorsi originali,
togliendo `.txt` dai nomi dei primi due. I percorsi relativi degli import sono
conservati per questa operazione. Riaggiungere poi le destinazioni necessarie nella
navigazione e nella sitemap, mappare il percorso in `src/data/breadcrumbs.ts` e
verificare nuovamente la build.

Prima di pubblicare contenuti ripristinati, ricontrollare date, disponibilità,
condizioni e marcature di archivio. Questa conservazione non rinnova promozioni
o approvazioni editoriali.
