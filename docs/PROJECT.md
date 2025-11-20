# Progetto

> **PROMEMORIA AI:** Aggiornare quando cambia scopo, obiettivi, stack tecnologico o architettura. Consultare REMINDERS.md per checklist completa.

## Nome Progetto
Meetdrip

## Scopo
Gestionale completo per magazzino/rivendita di prodotti cannabis. Gestione di flussi di cassa, magazzini, movimenti, prodotti, clienti e tutte le funzionalità necessarie per un gestionale completo.

## Obiettivi
- Obiettivo primario: Gestionale completo per magazzino/rivendita
- Funzionalità principali:
  - Gestione prodotti
  - Gestione clienti
  - Gestione magazzino
  - Gestione flussi di cassa
  - Gestione movimenti
  - Tutte le funzionalità necessarie per un gestionale completo
- Obiettivi secondari
- Obiettivi a lungo termine
- Requisito fondamentale: Web app completamente GRATIS e ILLIMITATA in creazione, sviluppo ed utilizzo

## Stack Tecnologico
- Linguaggio/i di programmazione: TypeScript (Node.js)
- Framework principali: 
  - Backend: Express.js
  - Frontend: React
- Database: Neon (PostgreSQL serverless)
- Hosting/Deploy: Render
- Version control: GitHub
- Librerie chiave:
  - **Frontend UI**: Tailwind CSS (styling utility-first), shadcn/ui (componenti UI moderni e personalizzabili)
  - **Gestione dati**: React Query (fetching dati, cache, sincronizzazione)
  - **State management**: Zustand (state management leggero e moderno)
  - **Backend**: Da definire durante lo sviluppo (es. express-validator, bcrypt, jwt, etc.)
- Strumenti di build/deploy: Render (gratuito e illimitato)

## Architettura
- Pattern architetturali utilizzati: REST API, separazione frontend/backend
- Struttura moduli/componenti:
  - Backend: Express.js (API REST, autenticazione, logica business)
  - Frontend: React (interfaccia utente, dashboard, gestione)
- Flusso dati principale: Frontend React → API Express → Database Neon
- Interfacce e API: REST API con Express.js
- Deployment: Render (backend Express + frontend React)
  - App accessibile da remoto (cloud), non solo locale
- Database: Connessione remota a Neon (PostgreSQL serverless)
- Volume dati: Gestione di dati normali/pochi, non grandi database

