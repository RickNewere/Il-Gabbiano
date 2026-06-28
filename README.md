# B&B Il Gabbiano - Monopoli (BA)

Sito vetrina responsive per il **B&B Il Gabbiano**, situato a Monopoli (Bari), Puglia. 

Il sito è stato progettato senza l'utilizzo di framework pesanti (come Expo/React Native Web), rendendolo estremamente veloce, ottimizzato per i motori di ricerca (SEO) e facilissimo da ospitare gratuitamente su qualsiasi piattaforma.

---

## 🚀 Funzionalità Implementate
1. **Design Moderno e Responsive**: Layout ottimizzato per dispositivi mobili, tablet e desktop. Colori caldi che richiamano la pietra di Puglia e il blu del mare Adriatico.
2. **Supporto Multilingua (Italiano / Inglese)**: Traduzione istantanea di tutte le sezioni cliccando sul selettore della lingua in alto.
3. **Carousel Fotografico**: Un carosello interattivo per scorrere i dettagli e gli spazi interni del bilocale.
4. **Galleria Fotografica Interattiva**: Filtro per categorie ("Tutte", "Interni", "Monopoli e Dintorni") con supporto per visualizzazione a schermo intero (Lightbox) delle 17 foto originali caricate su PostImg.
5. **Dettagli Posizione**: Descrizioni dettagliate su come raggiungere il B&B (in auto, treno, aereo), distanze dalle attrazioni principali e mappa interattiva di Google Maps integrata.
6. **Form Preventivi Interattivo**: Modulo per inserire Nome, Email, Date di Check-in/Check-out, Numero di Ospiti e Messaggio.
7. **Integrazione WhatsApp**:
   - Pulsante fluttuante sempre visibile per chattare con l'host.
   - Generazione automatica di un messaggio precompilato all'invio del form di contatto, che consente all'utente di inviare i dati della prenotazione direttamente su WhatsApp all'host.
8. **Link Diretto ad Airbnb**: Pulsanti in evidenza in tutto il sito che riportano direttamente all'annuncio ufficiale su Airbnb per concludere la prenotazione.

---

## 🛠️ Come Testarlo in Locale

Hai due opzioni semplicissime per aprire il sito sul tuo computer:

### Opzione 1: Doppia Clic (Nessuna installazione richiesta)
1. Apri la cartella di progetto: `c:\Users\rober\Desktop\casa\Il-Gabbiano-main\Il-Gabbiano-main\`
2. Fai doppio clic sul file `index.html`.
3. Il sito si aprirà istantaneamente nel tuo browser predefinito.

### Opzione 2: Tramite il server locale Node.js
Se hai Node.js installato sul tuo computer, puoi utilizzare l'Express server che abbiamo semplificato per te:
1. Apri il terminale nella cartella di progetto.
2. Esegui il comando:
   ```bash
   node index.js
   ```
3. Apri il tuo browser su [http://localhost:3000](http://localhost:3000).

---

## 🌐 Come Hostarlo Gratuitamente

Esistono diverse piattaforme eccezionali che ti permettono di pubblicare online questo sito web a costo zero, per sempre. Di seguito trovi le 3 opzioni più facili:

### Opzione 1: Netlify Drop (La più veloce in assoluto - 1 minuto)
Questa opzione non richiede nessuna conoscenza tecnica o riga di comando.
1. Salva i file del progetto sul tuo computer.
2. Vai su [Netlify Drop](https://app.netlify.com/drop).
3. Trascina l'intera cartella `Il-Gabbiano-main` (quella contenente `index.html`, `styles.css` e `script.js`) nel box di upload al centro della pagina.
4. Il tuo sito sarà pubblicato istantaneamente e riceverai un link gratuito del tipo `https://nome-casuale.netlify.app`.
5. Puoi andare nelle impostazioni del sito su Netlify per cambiare il nome del dominio gratuito (es. `ilgabbianomonopoli.netlify.app`) o collegare un dominio personalizzato (es. `.it` o `.com`) se ne acquisti uno.

### Opzione 2: Vercel (Consigliata per velocità e affidabilità)
Il progetto contiene già un file `vercel.json` preconfigurato.
1. Vai su [Vercel](https://vercel.com/) e registrati gratuitamente con la tua email.
2. Clicca su **Add New** -> **Project**.
3. Se hai il codice su GitHub, puoi collegare la repository e Vercel pubblicherà il sito ad ogni modifica.
4. In alternativa, puoi installare la CLI di Vercel sul computer ed eseguire il comando `vercel` all'interno della cartella di progetto, oppure usare il tool di caricamento manuale della cartella sulla dashboard online di Vercel.
5. Vercel ti fornirà un indirizzo gratuito del tipo `ilgabbiano.vercel.app`.

### Opzione 3: GitHub Pages (Perfetta se usi Git)
Se salvi il tuo codice in una repository su GitHub:
1. Crea una repository pubblica su GitHub (es. `il-gabbiano-bb`).
2. Fai il push dei file statici (`index.html`, `styles.css`, `script.js`) nella repository.
3. Vai nelle impostazioni (**Settings**) della repository su GitHub.
4. Nel menu laterale a sinistra, clicca su **Pages**.
5. Sotto la voce **Build and deployment**, seleziona come Source: **Deploy from a branch**.
6. Sotto **Branch**, seleziona `main` (o la tua branch principale) e la cartella `/ (root)`, poi clicca su **Save**.
7. Dopo pochi secondi, GitHub pubblicherà il tuo sito all'indirizzo `https://tuo-username.github.io/il-gabbiano-bb/`.

---

## ✏️ Contatti e Collegamenti Configurati
Nel codice del sito sono stati configurati i dettagli da te richiesti:
- **Telefono dell'host**: `+39 338 929 0144` (abilitato per chiamate dirette, link WhatsApp fisso e messaggi precompilati).
- **Email dell'host**: `riccardoranieri00@gmail.com` (abilitata per invio email automatico).
- **Indirizzo**: Largo Amalfitana 20, Monopoli (BA) (collegato alle indicazioni di Google Maps).
- **Link Airbnb**: `https://it.airbnb.ch/rooms/1317966183520064227?adults=2...` (presente nel bottone principale di prenotazione in alto, nel banner Hero e nel footer).
