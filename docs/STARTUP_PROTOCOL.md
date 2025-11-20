# Protocollo di Avvio

> **PROMEMORIA AI:** Aggiornare quando vengono aggiunti/modificati controlli di avvio o quando cambia il processo di startup. Consultare REMINDERS.md per checklist completa.

## Panoramica

Questo documento descrive il protocollo di avvio completo che viene eseguito quando si lancia `npm run dev`. Ogni controllo viene eseguito in sequenza e deve passare prima di procedere al successivo.

## Sequenza di Controlli

### 1. Controllo Porte

**Scopo:** Verificare e liberare le porte necessarie per backend e frontend.

**Porte controllate:**
- Porta 3000 (Frontend - Vite)
- Porta 5000 (Backend - Express)

**Comportamento:**
- Se una porta è occupata, il processo che la occupa viene terminato automaticamente
- Se la porta è libera, il controllo passa senza azioni

**Messaggi:**
- `🔍 [FRONTEND] Controllo porta 3000...`
- `✅ [FRONTEND] Porta 3000 liberata (o già libera)`
- `🔍 [BACKEND] Controllo porta 5000...`
- `✅ [BACKEND] Porta 5000 liberata (o già libera)`

**Errore:** Se non è possibile liberare una porta, l'avvio viene interrotto con messaggio di errore.

---

### 2. Controllo TypeScript - Backend

**Scopo:** Verificare che non ci siano errori di tipo TypeScript nel backend prima di avviare.

**Comando eseguito:** `cd backend && npm run type-check`

**Comportamento:**
- Esegue `tsc --noEmit` per verificare errori di tipo senza generare file
- Se ci sono errori, l'avvio viene interrotto e vengono mostrati gli errori

**Messaggi:**
- `🔍 [BACKEND] Controllo TypeScript...`
- `✅ [BACKEND] TypeScript: nessun errore`
- `❌ [BACKEND] TypeScript: errori trovati` (con dettagli)

**Errore:** Se ci sono errori TypeScript, l'avvio viene interrotto. Correggere gli errori prima di riprovare.

---

### 3. Controllo TypeScript - Frontend

**Scopo:** Verificare che non ci siano errori di tipo TypeScript nel frontend prima di avviare.

**Comando eseguito:** `cd frontend && npm run type-check`

**Comportamento:**
- Esegue `tsc --noEmit` per verificare errori di tipo senza generare file
- Se ci sono errori, l'avvio viene interrotto e vengono mostrati gli errori

**Messaggi:**
- `🔍 [FRONTEND] Controllo TypeScript...`
- `✅ [FRONTEND] TypeScript: nessun errore`
- `❌ [FRONTEND] TypeScript: errori trovati` (con dettagli)

**Errore:** Se ci sono errori TypeScript, l'avvio viene interrotto. Correggere gli errori prima di riprovare.

---

### 4. Avvio Backend

**Scopo:** Avviare il server Express del backend.

**Comando eseguito:** `cd backend && npm run dev`

**Comportamento:**
- Avvia il server Express in modalità watch (riavvio automatico su modifiche)
- Il server ascolta sulla porta 5000 (o quella specificata in `.env`)

**Messaggi:**
- `🚀 [BACKEND] Avvio server di sviluppo...`
- Output standard di Express (es. `🚀 Server running on port 5000`)

**Errore:** Se il backend non si avvia, viene mostrato l'errore e l'avvio viene interrotto.

---

### 5. Avvio Frontend

**Scopo:** Avviare il server di sviluppo Vite del frontend.

**Comando eseguito:** `cd frontend && npm run dev`

**Comportamento:**
- Avvia il server Vite in modalità sviluppo
- Il server ascolta sulla porta 3000 (configurata con `strictPort: true`)
- Se la porta 3000 è occupata, Vite si ferma con errore (ma questo non dovrebbe succedere grazie al controllo iniziale)

**Messaggi:**
- `🚀 [FRONTEND] Avvio server di sviluppo...`
- Output standard di Vite (es. `Local: http://localhost:3000/`)

**Errore:** Se il frontend non si avvia, viene mostrato l'errore e l'avvio viene interrotto.

---

## Struttura Script

### File Principali

- `package.json` - Script principale `dev` che avvia tutto
- `scripts/start-backend.js` - Script wrapper per avvio backend con controlli
- `scripts/start-frontend.js` - Script wrapper per avvio frontend con controlli
- `scripts/pre-startup-checks.js` - Script che esegue tutti i controlli pre-avvio

### Flusso Esecuzione

```
npm run dev
  ↓
concurrently avvia:
  ├─ npm run dev:backend
  │   └─ scripts/start-backend.js
  │       ├─ Controllo porta 5000
  │       ├─ Controllo TypeScript backend
  │       └─ Avvio backend
  │
  └─ npm run dev:frontend
      └─ scripts/start-frontend.js
          ├─ Controllo porta 3000
          ├─ Controllo TypeScript frontend
          └─ Avvio frontend
```

---

## Troubleshooting

### Porta occupata non viene liberata

**Sintomo:** Errore "Port already in use" anche dopo il controllo porte.

**Possibili cause:**
- Processo con privilegi elevati che non può essere terminato
- Porta occupata da servizio di sistema

**Soluzione:**
- Chiudere manualmente il processo dalla Gestione Attività (Windows)
- Verificare quale processo occupa la porta: `netstat -ano | findstr :3000` (Windows)

---

### Errori TypeScript bloccano l'avvio

**Sintomo:** L'avvio si ferma con errori TypeScript.

**Possibili cause:**
- Errori di tipo nel codice
- File TypeScript non compilabili
- Configurazione TypeScript errata

**Soluzione:**
- Correggere gli errori TypeScript mostrati
- Verificare la configurazione in `tsconfig.json`
- Eseguire manualmente `npm run type-check` in backend/frontend per vedere tutti gli errori

---

### Backend non si avvia

**Sintomo:** Il backend non parte o si ferma subito.

**Possibili cause:**
- File `.env` mancante o mal configurato
- Database non raggiungibile
- Dipendenze non installate

**Soluzione:**
- Verificare che esista `backend/.env` con tutte le variabili necessarie
- Verificare connessione al database Neon
- Eseguire `npm install` in `backend/`

---

### Frontend non si avvia

**Sintomo:** Il frontend non parte o si ferma subito.

**Possibili cause:**
- Dipendenze non installate
- Errore di configurazione Vite
- Errore nel codice React

**Soluzione:**
- Verificare che `node_modules` esista in `frontend/`
- Eseguire `npm install` in `frontend/`
- Verificare errori nella console

---

## Note Tecniche

- I controlli TypeScript vengono eseguiti con `tsc --noEmit` per non generare file ma solo verificare errori
- Le porte vengono liberate usando `kill-port` che termina i processi in modo sicuro
- `concurrently` viene usato per avviare backend e frontend in parallelo con l'opzione `--kill-others-on-fail`
- Se uno script fallisce (errori TypeScript o altri errori), tutti gli altri processi vengono fermati automaticamente
- Tutti i messaggi includono prefissi `[BACKEND]` o `[FRONTEND]` per identificare la fonte

---

## Estensioni Future

Controlli che potrebbero essere aggiunti in futuro:

- [ ] Verifica esistenza file `.env` e variabili d'ambiente
- [ ] Test connessione database prima di avviare backend
- [ ] Verifica esistenza `node_modules` in backend e frontend
- [ ] Controllo versione Node.js minima richiesta
- [ ] Verifica spazio disco disponibile
- [ ] Controllo linting (se ESLint viene aggiunto)

