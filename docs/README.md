# Meetdrip

Gestionale completo per magazzino/rivendita di prodotti cannabis.

## Panoramica

Meetdrip è un gestionale web completo sviluppato per la gestione di magazzino e rivendita di prodotti cannabis. L'applicazione è costruita con tecnologie moderne e offre un'interfaccia premium con design dark mode.

## Stack Tecnologico

- **Backend**: Express.js + TypeScript
- **Frontend**: React + TypeScript + Vite
- **Database**: Neon (PostgreSQL serverless)
- **Hosting**: Render
- **Styling**: Tailwind CSS (design premium dark mode)
- **State Management**: Zustand
- **Data Fetching**: Axios + React Query (previsto)
- **Autenticazione**: JWT

## Caratteristiche Principali

- ✅ Sistema di autenticazione completo (login/registrazione)
- ✅ Design premium con dark mode
- ✅ Interfaccia responsive
- ✅ API REST con validazione
- ✅ Database PostgreSQL serverless
- ✅ Protocollo di avvio automatico con controlli pre-avvio

## Setup Rapido

### Prerequisiti

- Node.js 18 o superiore
- npm (incluso con Node.js)
- Accesso a database Neon (PostgreSQL)

### Installazione

1. Clona o scarica il repository
2. Installa tutte le dipendenze:
```bash
npm run install:all
```

3. Configura il database:
   - Crea `backend/.env` con le variabili d'ambiente (vedi `SETUP_INSTRUCTIONS.md`)
   - Esegui la migrazione SQL per creare la tabella users

### Avvio

Dalla root del progetto:
```bash
npm run dev
```

Questo avvierà automaticamente:
- Backend su `http://localhost:5000`
- Frontend su `http://localhost:3000`

Il protocollo di avvio esegue automaticamente:
- Controllo e liberazione porte 3000 e 5000
- Verifica errori TypeScript
- Avvio backend e frontend in parallelo

Per dettagli completi, vedi `SETUP_INSTRUCTIONS.md` e `docs/STARTUP_PROTOCOL.md`.

## Struttura Progetto

```
Meetdrip_Data/
├── backend/          # API Express + TypeScript
│   ├── src/
│   │   ├── config/   # Configurazioni (database)
│   │   ├── db/       # Migrazioni database
│   │   ├── middleware/ # Middleware (auth)
│   │   ├── routes/   # Route API
│   │   └── index.ts  # Entry point
│   └── package.json
├── frontend/         # React + TypeScript + Vite
│   ├── src/
│   │   ├── lib/      # Utilities (API client)
│   │   ├── pages/    # Pagine React
│   │   ├── store/    # Zustand stores
│   │   └── App.tsx   # Entry point
│   └── package.json
├── docs/             # Documentazione completa
├── scripts/          # Script di avvio
└── package.json      # Root package.json
```

## Documentazione Completa

La cartella `docs/` contiene documentazione dettagliata:

- **SETUP.md** - Configurazione ambiente e dipendenze
- **SETUP_INSTRUCTIONS.md** - Istruzioni passo-passo per setup iniziale
- **STARTUP_PROTOCOL.md** - Protocollo di avvio automatico
- **PROJECT.md** - Scopo, obiettivi e architettura
- **REQUIREMENTS.md** - Requisiti e funzionalità
- **DESIGN.md** - Design system e stile premium
- **NOTES.md** - Note tecniche, API, configurazioni
- **ERRORS.md** - Errori riscontrati e soluzioni
- **DECISIONS.md** - Decisioni tecniche prese
- **PREFERENCES.md** - Preferenze utente e convenzioni
- **REMINDERS.md** - Checklist aggiornamento documenti
- **TODO.md** - Task e roadmap

## API Endpoints

### Autenticazione
- `POST /api/auth/register` - Registrazione nuovo utente
- `POST /api/auth/login` - Login utente
- `GET /api/health` - Health check API

Per dettagli completi, vedi `docs/NOTES.md`.

## Sviluppo

### Comandi Disponibili

**Root:**
- `npm run dev` - Avvia backend e frontend in parallelo
- `npm run install:all` - Installa tutte le dipendenze
- `npm run build` - Build produzione

**Backend:**
- `npm run dev` - Avvio sviluppo con watch
- `npm run build` - Compilazione TypeScript
- `npm run type-check` - Verifica errori TypeScript
- `npm run migrate` - Esegui migrazioni database

**Frontend:**
- `npm run dev` - Avvio server sviluppo Vite
- `npm run build` - Build produzione
- `npm run type-check` - Verifica errori TypeScript

## Note Importanti

- Il frontend è configurato con porta fissa 3000 (non cambia)
- Le richieste API dal frontend vengono inoltrate automaticamente al backend tramite proxy Vite
- Il token JWT viene salvato in localStorage e aggiunto automaticamente alle richieste
- Il database è remoto (Neon) e sempre accessibile
- Tutti i servizi utilizzati sono gratuiti e senza limiti

## Licenza

Progetto privato - Meetdrip

