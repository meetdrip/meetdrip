# Setup

> **PROMEMORIA AI:** Aggiornare quando cambiano requisiti ambiente, dipendenze, installazione o configurazioni. Consultare REMINDERS.md per checklist completa.

## Ambiente di Sviluppo
- OS richiesto: Windows 11
- Browser sviluppo: Chrome
- Version control: GitHub
- Linguaggio: TypeScript 5.3.3
- Runtime: Node.js 18+
- Framework backend: Express.js 4.18.2
- Framework frontend: React 18.2.0
- Build tool frontend: Vite 5.0.8
- Editor/IDE consigliato: Cursor/VS Code
- Versioni minime: Node.js 18+

## Dipendenze
### Dipendenze di Sistema
- Node.js 18 o superiore
- npm (incluso con Node.js)
- PostgreSQL client (per accesso diretto al database, opzionale)

### Dipendenze del Progetto
- Package manager: npm
- File dipendenze: 
  - `package.json` (root)
  - `backend/package.json`
  - `frontend/package.json`
- Comando installazione: `npm run install:all` (dalla root)

### Dipendenze Backend
- express: ^4.18.2
- cors: ^2.8.5
- dotenv: ^16.3.1
- pg: ^8.11.3 (PostgreSQL client)
- bcryptjs: ^2.4.3 (hashing password)
- jsonwebtoken: ^9.0.2 (autenticazione JWT)
- express-validator: ^7.0.1 (validazione input)
- tsx: ^4.7.0 (dev - esecuzione TypeScript)
- typescript: ^5.3.3 (dev)

### Dipendenze Frontend
- react: ^18.2.0
- react-dom: ^18.2.0
- react-router-dom: ^6.21.1
- @tanstack/react-query: ^5.17.9
- zustand: ^4.4.7
- axios: ^1.6.2
- tailwindcss: ^3.4.0 (dev)
- vite: ^5.0.8 (dev)
- typescript: ^5.3.3 (dev)

### Dipendenze Root
- concurrently: ^8.2.2 (dev - avvio parallelo)
- kill-port: ^2.0.1 (dev - liberazione porte)

## Installazione
1. Prerequisiti: 
   - Node.js 18+ installato
   - Accesso a database Neon (PostgreSQL serverless)
   - Git (opzionale, per version control)
2. Clone/Download: 
   - Clonare repository o scaricare progetto
   - Navigare nella cartella `Meetdrip_Data`
3. Installazione dipendenze: 
   ```bash
   npm run install:all
   ```
   Questo installerà automaticamente dipendenze di root, backend e frontend.
4. Configurazione iniziale: 
   - Creare file `backend/.env` (vedi sezione Configurazione)
   - Eseguire migrazione database (vedi SETUP_INSTRUCTIONS.md)

## Come Avviare il Progetto
- Comando sviluppo (consigliato): `npm run dev` (dalla root)
  - Avvia automaticamente backend e frontend in parallelo
  - Esegue controlli pre-avvio (porte, TypeScript)
  - Vedi STARTUP_PROTOCOL.md per dettagli
- Comando sviluppo backend: `cd backend && npm run dev`
- Comando sviluppo frontend: `cd frontend && npm run dev`
- Comando produzione: `npm run build` (compila backend e frontend)
- Porta default backend: 5000
- Porta default frontend: 3000 (fissa, non cambia)
- URL accesso sviluppo: 
  - Frontend: http://localhost:3000
  - Backend: http://localhost:5000
- URL accesso produzione: Render (da configurare)

## Database
- Database: Neon (PostgreSQL serverless)
- Accesso: Remoto via connessione cloud
- Stringa connessione: Configurata in `backend/.env` come `DATABASE_URL`
- Migrazioni: File SQL in `backend/src/db/migrations/`
- Comando migrazione: `cd backend && npm run migrate`

## Hosting/Deploy
- Piattaforma: Render
- Servizi: Backend Express + Frontend React
- Database: Neon (PostgreSQL serverless) - esterno
- Costo: Gratuito (piano free tier)

## Configurazione
- File di configurazione: 
  - `backend/.env` (variabili d'ambiente backend)
  - `frontend/vite.config.ts` (configurazione Vite)
  - `backend/tsconfig.json` (configurazione TypeScript backend)
  - `frontend/tsconfig.json` (configurazione TypeScript frontend)
  - `frontend/tailwind.config.js` (configurazione Tailwind CSS)
- Variabili d'ambiente necessarie (backend/.env): 
  - `DATABASE_URL`: Stringa connessione PostgreSQL Neon
  - `JWT_SECRET`: Chiave segreta per firma JWT (generare con `openssl rand -base64 32`)
  - `PIN_HASH`: Hash SHA-256 del PIN di accesso (non il PIN in chiaro!)
  - `PORT`: Porta server backend (default: 5000)
  - `NODE_ENV`: Ambiente (development/production)
- Configurazioni opzionali: 
  - Proxy API frontend: Configurato in `vite.config.ts` per `/api` → `http://localhost:5000` 

